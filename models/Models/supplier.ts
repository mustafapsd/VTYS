import { Model } from "axe-api";

export class Supplier extends Model {
  id!: number;
  name: string = "";
  email: string = "";
  phone: string = "";
  address: string = "";
  regionId!: number;

  get table() {
    return "supplier";
  }
}

export class SupplierProduct extends Model {
  id!: number;
  supplierId!: number;
  productId!: number;
  price: number = 0;

  get table() {
    return "supplier_product";
  }
}