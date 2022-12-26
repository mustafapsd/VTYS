import { IRelation, Model } from "axe-api";

class Region extends Model {
  get createdAtColumn(): string | null {
    return null;
  }

  get updatedAtColumn(): string | null {
    return null;
  }
  get table() {
    return "region";
  }

  client(): IRelation {
    return this.belongsTo("client", "id", "regionId");
  }
}

export default Region;
