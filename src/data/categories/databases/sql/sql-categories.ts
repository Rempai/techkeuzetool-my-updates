import type { Category } from "../../Types";
import * as sql from "."; //import info pages vanuit dezelfde map

export const SQL: Array<Category> = [
  {
    name: "SQL-Databases",
    description:
      "SQL-databases gebruiken een gestructureerd model met een vast schema voor gegevensopslag en zijn geschikt voor complexe relaties en transacties.",
    color: "bg-purple-500",
    children: [sql.sql.default, sql.mysql.default],
  },
];
