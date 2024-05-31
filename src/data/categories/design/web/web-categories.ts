import type { Category } from "../../Types";
import * as beginnend from ".";

export const website: Array<Category> = [
  {
    name: "Web Design",
    description: "",
    color: "bg-blue-500",
    children: [
      beginnend.figma.default, // Use the actual objects
    ],
  },
  // Add other categories if needed
];
