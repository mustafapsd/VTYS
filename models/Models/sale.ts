import { Model } from "axe-api";
import { SaleProduct } from "./product";

export class Sale extends Model {
  id!: number;
  date: Date = new Date();
  sellerId!: number;
  clientId!: number;
  offerId!: number;
  price: number = 0;
  products: SaleProduct[] = [];

  get table() {
    return "sale";
  }

  constructor() {
    super();
  }
}