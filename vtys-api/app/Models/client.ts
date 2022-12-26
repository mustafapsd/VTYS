import { IRelation, Model } from "axe-api";

class Client extends Model {
  get createdAtColumn(): string | null {
    return null;
  }

  get updatedAtColumn(): string | null {
    return null;
  }

  get table() {
    return "clients";
  }

  get fillable() {
    return ["name", "email", "phone", "regionId", "address"];
  }

  region(): IRelation {
    return this.hasOne("region", "id", "regionId");
  }
}

export default Client;
