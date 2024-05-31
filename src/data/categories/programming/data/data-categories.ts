import type { Category } from "../../Types";
import * as Data from ".";
import { python } from "./python/python-categories";

export const dataCategories: Array<Category> = [
  {
    name: "Data Science/Machine Learning/AI",
    description: "Iets laten denken door het te laten leren",
    color: "bg-orange-700",
    icon: "analytics-outline",
    iconColor: "text-orange-800",
    children: [...python, Data.r.default],
  },
];
