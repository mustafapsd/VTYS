import { Model } from "axe-api";

export class Visit extends Model {
  id!: number;
  date: Date = new Date();
  sellerId!: number;
  clientId!: number;
  contactId!: number;

  get table() {
    return "visit";
  }

  constructor() {
    super();
  }
}