import type { Category } from "../../../Types";
import * as beginnend from ".";

export const beginner: Array<Category> = [
  {
    name: "Beginner",
    description: "",
    color: "bg-teal-500",
    children: [beginnend.express.default, beginnend.django.default, beginnend.aspnet.default],
  },
];
