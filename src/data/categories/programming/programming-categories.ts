import type { Category } from "../Types";
import { frontendCategories } from "./frontend";
import { backendCategories } from "./backend";
import { appCategories } from "./app/app-categories";
import { gameCategories } from "./game/game-categories";
import { dataCategories } from "./data/data-categories";

export const programmingCategories: Array<Category> = [
  {
    name: "Programmeren",
    description:
      "Programmeer talen zijn de kern van je hele programma. Zonder een goede keuze van de taal die je nodig hebt loop je vast.",
    color: "bg-cyan-500",
    icon: "code-slash-outline",
    iconColor: "text-cyan-800",
    children: [
      ...frontendCategories,
      ...backendCategories,
      ...appCategories,
      ...gameCategories,
      ...dataCategories,
    ],
  },
];
