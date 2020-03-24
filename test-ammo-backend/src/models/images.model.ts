import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table, ForeignKey } from 'sequelize-typescript';
import Product from './products.model';

@Table({ modelName: 'image', timestamps: true, paranoid: true })
export default class Image extends Model<Image> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => Product)
  productId: Number;

  @AllowNull(false)
  @Column(DataType.STRING(1024))
  path: string;
}
