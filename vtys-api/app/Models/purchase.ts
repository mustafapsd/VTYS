import { Model } from "axe-api";

class Purchase extends Model {
  get createdAtColumn(): string | null {
    return null;
  }

  get updatedAtColumn(): string | null {
    return null;
  }
  get table() {
    return "purchase";
  }
}

export default Purchase;