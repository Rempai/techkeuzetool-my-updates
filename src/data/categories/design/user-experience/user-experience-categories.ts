import type { Category } from "../../Types";
import * as beginnend from ".";

export const userexperiences: Array<Category> = [
  {
    name: "User Experience Design",
    description: "",
    color: "bg-yellow-500",
    children: [
      beginnend.figma.default, // Use the actual objects
    ],
  },
  // Add other categories if needed
];
