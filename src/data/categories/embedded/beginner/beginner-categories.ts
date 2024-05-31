import type { Category } from "../../Types";
import * as beginnend from ".";

export const beginner: Array<Category> = [
  {
    name: "Beginner",
    description:
      "Als je nog weinig ervaring hebt met embedded systemen, kan je hier meer leren over de basis.",
    color: "bg-teal-500",
    children: [
      beginnend.Arduino.default,
      beginnend.ESP32.default,
      beginnend.M5.default,
      beginnend.Raspberry.default,
    ],
  },
];
