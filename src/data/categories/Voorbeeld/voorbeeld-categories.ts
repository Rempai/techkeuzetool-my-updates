import type { Category } from "../Types";
import { Test } from "./Test/test-categories"; //hier import je de const vanuit de categories file

export const voorbeeldCategories: Array<Category> = [
  {
    name: "Voorbeeld",
    description: "Dit is een voorbeeld. Hoe je kan formatten",
    color: "bg-cyan-500",
    icon: "code-slash-outline", //Hier kan je een icon definieren
    iconColor: "text-cyan-800", //hier kan je de icon een bepaalde kleur geven
    children: [
      ...Test, //hier voeg je de child directory toe je geexport hebt in zijn categories file
      //Je kan hier ook de volgorde bepalen in hoe het laten zien wordt
    ],
  },
];
