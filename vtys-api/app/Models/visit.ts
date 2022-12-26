import { Model } from "axe-api";

class Visit extends Model {
  get createdAtColumn(): string | null {
    return null;
  }

  get updatedAtColumn(): string | null {
    return null;
  }
  get table() {
    return "visit";
  }

  get fillable() {
    return ["clientId", "contactId", "sellerId", "date"];
  }
}

export default Visit;
