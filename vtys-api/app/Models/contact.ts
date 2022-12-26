import { Model } from "axe-api";

class Contact extends Model {
  get createdAtColumn(): string | null {
    return null;
  }

  get updatedAtColumn(): string | null {
    return null;
  }
  get table() {
    return "contact";
  }

  get fillable() {
    return ["name", "email", "phone", "surname", "clientId"];
  }
}

export default Contact;