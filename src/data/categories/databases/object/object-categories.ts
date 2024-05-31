import type { Category } from "../../Types";
import * as object from ".";

export const Object: Array<Category> = [
  {
    name: "Object-Oriented databases",
    description:
      "Object-Oriented databases organiseren gegevens zoals objecten in objectgeoriënteerde programmeertalen, waarbij zowel gegevens als functies (methoden) kunnen worden opgeslagen. Ze zijn geschikt voor het modelleren van complexe gegevensstructuren en zorgen voor een naadloze integratie met objectgeoriënteerde applicaties.",
    color: "bg-yellow-900",
    children: [object.dbo.default, object.objectdb.default, object.objectstore.default],
  },
];
