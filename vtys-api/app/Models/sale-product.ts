import { Model } from "axe-api";

class SaleProduct extends Model {
  get createdAtColumn(): string | null {
    return null;
  }

  get updatedAtColumn(): string | null {
    return null;
  }
  get table() {
    return "sale_product";
  }
}

export default SaleProduct;