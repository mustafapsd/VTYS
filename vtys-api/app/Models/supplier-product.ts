import { Model } from "axe-api";

class SupplierProduct extends Model {
  get createdAtColumn(): string | null {
    return null;
  }

  get updatedAtColumn(): string | null {
    return null;
  }
  get table() {
    return "supplier_product";
  }
}

export default SupplierProduct;