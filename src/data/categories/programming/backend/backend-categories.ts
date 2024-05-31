import type { Category } from "../../Types";
import { gevorderd } from "./gevorderd/gevorderd-categories";
import { beginner } from "./beginner/beginner-categories";

export const backendCategories: Array<Category> = [
  {
    name: "Backend",
    description: "Is het gedeelte wat je niet ziet",
    color: "bg-emerald-600",
    icon: "server",
    iconColor: "text-emerald-800",
    children: [...beginner, ...gevorderd],
  },
];
