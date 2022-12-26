import { Model } from "axe-api";

class Manager extends Model {
  get createdAtColumn(): string | null {
    return null;
  }

  get updatedAtColumn(): string | null {
    return null;
  }
  get table() {
    return "manager";
  }

  get fillable() {
    return ["id", "regionId"];
  }
}

export default Manager;
