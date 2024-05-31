import type { Category } from "../../Types";
import * as gevordend from ".";

export const gevorderd: Array<Category> = [
  {
    name: "Gevordend",
    description:
      "Als je al ervaring hebt met security, kan je hier meer geavanceerde projecten en technieken ontdekken.",
    color: "bg-indigo-700",
    children: [
      gevordend.application.default,
      gevordend.cryptografie.default,
      gevordend.network.default,
      gevordend.penetration.default,
      gevordend.web.default,
    ],
  },
];
