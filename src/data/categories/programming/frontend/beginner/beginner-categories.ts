import type { Category } from "../../../Types";
import * as beginnend from ".";

export const beginner: Array<Category> = [
  {
    name: "Beginner",
    description: "",
    color: "bg-teal-500",
    children: [beginnend.htmlcss.default, beginnend.Javascript.default, beginnend.Github.default],
  },
];
