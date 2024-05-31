import type { Category } from "../../Types";
import * as DrieD from ".";

export const d: Array<Category> = [
  {
    name: "3D Design",
    description: "",
    color: "bg-red-900",
    children: [
      DrieD.blender.default, // Use the actual objects
      DrieD.maya.default,
    ],
  },
  // Add other categories if needed
];
