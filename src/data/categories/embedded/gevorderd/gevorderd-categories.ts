import type { Category } from "../../Types";
import * as gevordend from ".";

export const gevorderd: Array<Category> = [
  {
    name: "Gevorderd",
    description:
      "Als je al ervaring hebt met embedded systemen, kan je hier meer geavanceerde projecten en technieken ontdekken.",
    color: "bg-[#2088cf]",
    children: [
      gevordend.Arduino.default,
      gevordend.ESP32.default,
      gevordend.M5.default,
      gevordend.Raspberry.default,
    ],
  },
];
