import { Model } from "axe-api";

class City extends Model {
  get createdAtColumn(): string | null {
    return null;
  }

  get updatedAtColumn(): string | null {
    return null;
  }

  get table() {
    return "cities";
  }
}

export default City;
