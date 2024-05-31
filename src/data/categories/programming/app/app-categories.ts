import type { Category } from "../../Types";
import * as App from ".";

export const appCategories: Array<Category> = [
  {
    name: "App Development",
    description: "Ontwikkelen voor mobiele apparaten",
    color: "bg-pink-700",
    icon: "apps-outline",
    iconColor: "text-pink-800",
    children: [App.javascript.default, App.dart.default, App.kotlin.default, App.swift.default],
  },
];
