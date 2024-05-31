import type { Category } from "../../Types";
import * as animation from ".";

export const animations: Array<Category> = [
  {
    name: "Animation",
    description: "",
    color: "bg-purple-500",
    children: [
      animation.aftereffects.default, // Use the actual objects
      animation.blender.default,
      animation.premierepro.default,
    ],
  },
  // Add other categories if needed
];
