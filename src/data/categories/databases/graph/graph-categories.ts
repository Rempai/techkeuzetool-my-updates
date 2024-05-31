import type { Category } from "../../Types";
import * as graph from ".";

export const Graph: Array<Category> = [
  {
    name: "Graph databases",
    description:
      "Graph databases zijn op grafiek gebaseerde gegevensopslagsystemen die gebruikmaken van grafentheorie om gegevens te modelleren, waarbij knooppunten entiteiten vertegenwoordigen en randen relaties tussen deze entiteiten. Ze excelleren in het efficiënt opslaan en ophalen van complexe onderlinge relaties in data, waardoor ze ideaal zijn voor toepassingen zoals sociale netwerken, aanbevelingssystemen en kennisgrafieken.",
    color: "bg-pink-700",
    children: [graph.neo.default, graph.neptune.default, graph.arango.default],
  },
];
