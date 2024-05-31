import type { Category } from "../../Types";
import * as nosql from ".";

export const NoSQL: Array<Category> = [
  {
    name: "NoSQL-databases",
    description:
      "NoSQL-databases bieden een flexibele, schema-loze benadering voor gegevensopslag, ideaal voor grote volumes ongestructureerde gegevens en diverse datatypes.",
    color: "bg-yellow-600",
    children: [nosql.nosql.default, nosql.firebase.default],
  },
];
