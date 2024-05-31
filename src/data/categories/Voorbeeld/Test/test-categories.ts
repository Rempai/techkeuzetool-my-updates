import type { Category } from "../../Types";
import * as test from "."; //import info pages vanuit dezelfde map
import { OpperTest } from "./oppertest/oppertest-categories"; //import een nieuwe child categorie die zijn eigen info pages heeft

export const Test: Array<Category> = [
  {
    name: "Test",
    description: "",
    color: "bg-teal-500",
    children: [test.test.default, ...OpperTest],
  },
];
