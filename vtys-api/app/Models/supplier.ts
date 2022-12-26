import { Model } from "axe-api";

class Supplier extends Model {
  get createdAtColumn(): string | null {
    return null;
  }

  get updatedAtColumn(): string | null {
    return null;
  }
  get table() {
    return "supplier";
  }
}

export default Supplier;
