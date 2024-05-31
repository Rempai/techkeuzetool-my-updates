import type { Category } from "../../Types";
import * as column from ".";

export const Column: Array<Category> = [
  {
    name: "Wide-Column databases",
    description:
      "Wide-Column databases zijn een type NoSQL-database dat gegevens organiseert in kolomfamilies in plaats van rijen, waardoor het efficiënt is voor het opslaan en ophalen van grote hoeveelheden gegevens met variabele attributen. Ze zijn ontworpen voor hoge schaalbaarheid en worden vaak gebruikt in situaties waarbij snelle en flexibele toegang tot kolomgeoriënteerde gegevens nodig is, zoals in big data-opslag, tijdreeksanalyse en datawarehousing.",
    color: "bg-cyan-800",
    children: [column.apache.default, column.bigtable.default, column.cassandra.default],
  },
];
