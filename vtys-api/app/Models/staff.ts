import { Model } from "axe-api";

class Staff extends Model {
  get createdAtColumn(): string | null {
    return null;
  }

  get updatedAtColumn(): string | null {
    return null;
  }

  get table() {
    return "staff";
  }

  get fillable() {
    return ["name", "surname", "email", "type"];
  }
}

export default Staff;
