import { Model } from "axe-api";

export class Contact extends Model {
  id!: number;
  name: string = "";
  surname: string = "";
  email: string = "";
  phone: string = "";
  clientId!: number;

  get table() {
    return "contact";
  }

  constructor() {
    super();
  }
}
