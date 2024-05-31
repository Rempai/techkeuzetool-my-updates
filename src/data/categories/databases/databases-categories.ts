import type { Category } from "../Types";
import { Column } from "./column/column-categories";
import { Graph } from "./graph/graph-categories";
import { Memory } from "./memory/memory-categories";
import { NewSQL } from "./newsql/newsql-categories";
import { NoSQL } from "./nosql/nosql-categories";
import { Object } from "./object/object-categories";
import { SQL } from "./sql/sql-categories";
import { Time } from "./time/time-categories";

export const databaseCategories: Array<Category> = [
  {
    name: "Databases",
    description:
      "Een database is een systeem waar de data van je product geordend en overzichtelijk verzameld wordt.",
    color: "bg-emerald-500",
    icon: "server-outline",
    iconColor: "text-emerald-800",
    children: [...SQL, ...NoSQL, ...NewSQL, ...Graph, ...Time, ...Memory, ...Column, ...Object],
  },
];
