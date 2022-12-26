import { Model } from "axe-api";
import { SaleProduct } from "./product";

export class Offer extends Model {
  id!: number;
  clientId!: number;
  sellerId!: number;
  contactId!: number;
  description: string = "";
  offer: number = 0;
  products: SaleProduct[] = [];

  get table() {
    return "offer";
  }

  constructor() {
    super();
  }
}
