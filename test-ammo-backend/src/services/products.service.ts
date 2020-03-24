import HttpException from '../exceptions/HttpException';
import { Product } from '../interfaces/products.interface';
import productModel from '../models/products.model';
import imageModel from '../models/images.model';

import { Page } from 'interfaces/pages.interfaces';
import { Sequelize} from 'sequelize-typescript';

import { Op } from 'sequelize';

const IMAGE_PATH_PREFIX = '/products-images/';

class ProductService {
  public products = productModel;

  public async searchProduct(term: string, page: number, perPage: number): Promise<Page<Product>> {
    const offset = (page - 1) * perPage;
    const limit = perPage;

    const { count, rows } = await this.products.findAndCountAll({
      limit: limit,
      offset: offset,
      include: [{model: imageModel, attributes: ['path']}],
      where: Sequelize.where(
        Sequelize.fn('lower', Sequelize.col('title')),
        {
          [Op.like]: '%' + term.toLowerCase() + '%'
        }
      ),
      distinct: true,
      order: ['price', 'id']
    });

    if (rows.length == 0)
      throw new HttpException(404, 'not found')

    return {
      items: rows.map(
        ({sku, title, shortDescription, price, oldPrice, images}: any) => (
          {sku, title, shortDescription, price, oldPrice, images: images.map((item: {path: string}) => IMAGE_PATH_PREFIX + item.path)})),
      totalItems: count,
      page: page,
      perPage: perPage,
      totalPages: Math.ceil(count / perPage)
    };
  }
}

export default ProductService;