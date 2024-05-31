import type { Category } from "../../Types";
import * as time from ".";

export const Time: Array<Category> = [
  {
    name: "Time Series databases",
    description:
      "Time Series Databases zijn gespecialiseerde databases die geoptimaliseerd zijn voor het opslaan, beheren en analyseren van gegevens die over tijd evolueren en georganiseerd zijn in chronologische volgorde. Ze zijn ontworpen om efficiënte tijdreeksgegevensopslag en -query's te bieden, waardoor ze ideaal zijn voor toepassingen zoals sensorgegevens, financiële marktanalyse en monitoring van systeemprestaties.",
    color: "bg-gray-600",
    children: [time.influx.default, time.prometheus.default, time.opentsdb.default],
  },
];
