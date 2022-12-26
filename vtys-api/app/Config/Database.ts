import { Knex } from "knex";
import { IDatabaseConfig } from "axe-api";

const config: IDatabaseConfig = {
  client: "postgresql",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "123456",
    database: "sale_force",
    searchPath: ["user", "public"],
  },
  pool: {
    min: 2,
    max: 10,
  },
} as Knex.Config;

export default config;
