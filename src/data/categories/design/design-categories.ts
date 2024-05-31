import type { Category } from "../Types";
import { graphics } from "./graphic/graphic-categories";
import { website } from "./web/web-categories";
import { userexperiences } from "./user-experience/user-experience-categories";
import { animations } from "./animation/animation-categories";
import { d } from "./3d/3d-categories";

export const designCategories: Array<Category> = [
  {
    name: "Design",
    description:
      "Het design is het opmaak van je product. Dit is wat de eindgebruiker te zien krijgt",
    color: "bg-red-500",
    icon: "brush-outline",
    iconColor: "text-red-800",
    children: [...graphics, ...website, ...userexperiences, ...animations, ...d],
  },
];
