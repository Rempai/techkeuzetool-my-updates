import type { Category } from "../../Types";
import { gevorderd } from "./gevorderd/gevorderd-categories";
import { beginner } from "./beginner/beginner-categories";

export const frontendCategories: Array<Category> = [
  {
    name: "Front-end",
    description: "Front-end zijn de dingen die je ziet",
    color: "bg-teal-500",
    icon: "code",
    iconColor: "text-teal-800",
    children: [...beginner, ...gevorderd],
  },
];
