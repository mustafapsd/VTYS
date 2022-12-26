import { Model } from "axe-api";

class Offer extends Model {
  get createdAtColumn(): string | null {
    return null;
  }

  get updatedAtColumn(): string | null {
    return null;
  }

  get table() {
    return "offer";
  }

  get fillable() {
    return ["id", "clientId", "contactId", "sellerId", "description", "offer"]
  } 
}

export default Offer;
