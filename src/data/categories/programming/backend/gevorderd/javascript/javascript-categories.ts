import type { Category } from "../../../../Types";
import * as JavaScript from ".";

export const javascript: Array<Category> = [
  {
    name: "JavaScript",
    description: "",
    color: "bg-emerald-700",
    children: [JavaScript.node.default, JavaScript.express.default, JavaScript.nest.default],
  },
];
