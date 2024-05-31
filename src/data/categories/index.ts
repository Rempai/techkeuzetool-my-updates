import type { Category } from "./Types";
import { embeddedCategories } from "./embedded";
import { programmingCategories } from "./programming";
import { securityCategories } from "./security";
import { designCategories } from "./design";
import { databaseCategories } from "./databases";
import { aiCategories } from "./ai";

const categories: Array<Category> = [
  ...designCategories,
  ...programmingCategories,
  ...embeddedCategories,
  ...securityCategories,
  ...databaseCategories,
  ...aiCategories,
  // Voeg hier nieuwe Categories toe
  // De namen heb je gedefinieerd in de categories.ts file in de bovenste map bij de export const
];

export {
  designCategories,
  programmingCategories,
  embeddedCategories,
  securityCategories,
  categories,
}; //vergeet ze hier niet ook te exporten
