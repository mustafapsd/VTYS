import { Model } from "axe-api";

class Sale extends Model {
  get createdAtColumn(): string | null {
    return null;
  }

  get updatedAtColumn(): string | null {
    return null;
  }
  get table() {
    return "sale";
  }
}

export default Sale;