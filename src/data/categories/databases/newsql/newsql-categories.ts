import type { Category } from "../../Types";
import * as newsql from ".";

export const NewSQL: Array<Category> = [
  {
    name: "NewSQL-databases",
    description:
      "NewSQL databases zijn een categorie van relationele databasesystemen die modernere, gedistribueerde architecturen combineren met de voordelen van traditionele SQL-databases, gericht op schaalbaarheid, flexibiliteit en consistentie voor grootschalige transactieverwerking.",
    color: "bg-indigo-400",
    children: [newsql.cockroach.default, newsql.spanner.default, newsql.nuo.default],
  },
];
