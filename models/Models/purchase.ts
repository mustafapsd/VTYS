import { Model } from "axe-api";

export class Purchase extends Model {
  id!: number;
  date: Date = new Date();
  supplierId!: number;
  productId!: number;
  quantity: number = 0;
  price: number = 0;

  get table() {
    return "purchase";
  }

  constructor() {
    super();
  }
}
