import { Model } from "axe-api";

class Product extends Model {
  get createdAtColumn(): string | null {
    return null;
  }

  get updatedAtColumn(): string | null {
    return null;
  }
  get table() {
    return "product";
  }

  get fillable() {
    return ["name", "price", "description", "stock"];
  }
}

export default Product;