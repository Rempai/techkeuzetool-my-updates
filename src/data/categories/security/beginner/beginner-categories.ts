import type { Category } from "../../Types";
import * as beginnend from ".";

export const beginner: Array<Category> = [
  {
    name: "Beginner",
    description:
      "Als je nog weinig ervaring hebt met security, kan je hier meer leren over de basis.",
    color: "bg-teal-500",
    children: [
      beginnend.application.default,
      beginnend.cryptografie.default,
      beginnend.network.default,
      beginnend.penetration.default,
      beginnend.web.default,
    ],
  },
];
