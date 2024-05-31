import type { Category } from "../../../../Types";
import * as Python from ".";

export const python: Array<Category> = [
  {
    name: "Python",
    description: "",
    color: "bg-emerald-700",
    children: [Python.django.default, Python.flask.default, Python.fastapi.default],
  },
];
