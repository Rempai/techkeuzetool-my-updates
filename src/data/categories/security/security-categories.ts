import type { Category } from "../Types";
import { beginner } from "./beginner/beginner-categories";
import { gevorderd } from "./gevorderd/gevorderd-categories";

export const securityCategories: Array<Category> = [
  {
    name: "Security",
    description:
      "Security is het beveiliging van je systemen en netwerken tegen bedreigingen op het internet",
    color: "bg-indigo-500",
    icon: "shield-checkmark-outline",
    iconColor: "text-indigo-800",
    children: [...beginner, ...gevorderd],
  },
];
