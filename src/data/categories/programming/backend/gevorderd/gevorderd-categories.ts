import type { Category } from "../../../Types";
import { c } from "./c/c-categories";
import { javascript } from "./javascript/javascript-categories";
import { python } from "./python/python-categories";

export const gevorderd: Array<Category> = [
  {
    name: "Gevorderd",
    description: "",
    color: "bg-teal-700",
    children: [...javascript, ...python, ...c],
  },
];
