import { Model } from "axe-api";

export class Staff extends Model {
  id!: number;
  name: string = "";
  surname: string = "";
  email: string = "";

  get table() {
    return "staff";
  }

  constructor() {
    super();
  }
}

export class Seller extends Model {
  id!: number;
  regionId!: number;
  managerId!: number;

  get table() {
    return "seller";
  }

  constructor() {
    super();
  }
}

export class Manager extends Model {
  id!: number;
  regionId!: number;

  get table() {
    return "manager";
  }

  constructor() {
    super();
  }
}