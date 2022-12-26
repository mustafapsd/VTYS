import { Model } from "axe-api";

export class Client extends Model {
  id!: number;
  name: string = "";
  email: string = "";
  phone: string = "";
  address: string = "";
  regionId!: number;
  cityId!: number;

  get table() {
    return "clients";
  }

  constructor() {
    super();
  }
} 

