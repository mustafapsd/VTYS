import { Model } from "axe-api";

class Seller extends Model {
  get createdAtColumn(): string | null {
    return null;
  }

  get updatedAtColumn(): string | null {
    return null;
  }

  get table() {
    return "seller";
  }

  get fillable() {
    return ["id", "managerId", "regionId"];
  }
}

export default Seller;
