import { NextFunction, Request, Response } from 'express';
import productService from '../services/products.service';
import { Page } from 'interfaces/pages.interfaces';
import { Product } from 'interfaces/products.interface';

const DEFAULT_PER_PAGE = 10;

class ProductsController {
  public productService = new productService();

  public getProducts = async (req: Request, res: Response, next: NextFunction) => {
    const searchTerm: string = req.query.s || '';
    const perPage = Number(req.query.perPage) || DEFAULT_PER_PAGE;
    const page = Number(req.query.page) || 1;

    try {
      const productPage: Page<Product> = await this.productService.searchProduct(searchTerm, page, perPage);
      res.status(200).json(productPage);
    } catch (error) {
      next(error);
    }
  }
}

export default ProductsController;