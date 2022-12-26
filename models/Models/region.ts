import { Model } from "axe-api";
import { Manager, Seller } from "./staff";

export class Region extends Model {
  id!: number;
  name: string = "";
  managers: Manager[] = [];
  sellers: Seller[] = [];

  get table() {
    return "region";
  }

  constructor() {
    super();
  }
}

export class City extends Model {
  id!: number;
  name: string = "";
  regionId!: number;

  get table() {
    return "city";
  }

  constructor() {
    super();
  }
}