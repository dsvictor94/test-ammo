import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Unique, Table, HasMany } from 'sequelize-typescript';
import Image from './images.model';

@Table({ modelName: 'product', timestamps: true, paranoid: true })
export default class Product extends Model<Product> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(14))
  sku: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  title: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  shortDescription: string;

  @AllowNull(false)
  @Column(DataType.DECIMAL(10, 2))
  price: string;

  @Column(DataType.DECIMAL(10, 2))
  oldPrice: string

  @HasMany(() => Image)
  images: Image[];
}
