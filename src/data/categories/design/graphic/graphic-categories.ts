import type { Category } from "../../Types";
import * as beginnend from ".";

export const graphics: Array<Category> = [
  {
    name: "Graphic Design",
    description: "",
    color: "bg-green-500",
    children: [
      beginnend.Illustrator.default, // Use the actual objects
      beginnend.indesign.default,
      beginnend.photoshop.default,
    ],
  },
  // Add other categories if needed
];
