import { Model } from "axe-api";

export class Product extends Model {
  id!: number;
  name: string = "";
  description: string = "";
  price: number = 0;
  stock: number = 0;

  get table() {
    return "product";
  }

  constructor() {
    super();
  }
}

export class SaleProduct extends Model {
  id!: number;
  saleId!: number;
  productId!: number;
  quantity: number = 0;
  price: number = 0;

  get table() {
    return "sale_product";
  }

  constructor() {
    super();
  }
}
