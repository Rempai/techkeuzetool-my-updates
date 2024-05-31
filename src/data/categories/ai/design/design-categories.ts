import type { Category } from "../../Types";
import * as design from ".";

export const Design: Array<Category> = [
  {
    name: "Design Tools",
    description:
      "Design tools bij AI betreffen het gebruik van kunstmatige intelligentie om creatieve ontwerpen te genereren, optimaliseren of assisteren, vaak via technieken zoals generatieve modellen, neurale netwerken of algoritmen voor patroonherkenning.",
    color: "bg-green-700",
    children: [design.fontjoy.default, design.looka.default],
  },
];
