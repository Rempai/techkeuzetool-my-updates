import type { Category } from "../Types";
import { beginner } from "./beginner/beginner-categories";
import { gevorderd } from "./gevorderd/gevorderd-categories";

export const embeddedCategories: Array<Category> = [
  {
    name: "Embedded",
    description:
      "Embedded systemen zijn computerhardware en -software ontworpen voor specifieke taken. Ze vormen de ruggengraat van veel moderne elektronische apparaten.",
    color: "bg-indigo-500",
    icon: "code-working-outline",
    iconColor: "text-indigo-800",
    children: [...beginner, ...gevorderd],
  },
];
