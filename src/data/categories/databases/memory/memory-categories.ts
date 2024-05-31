import type { Category } from "../../Types";
import * as memory from ".";

export const Memory: Array<Category> = [
  {
    name: "In-Memory databases",
    description:
      "In-Memory databases zijn databasesystemen die volledig in het RAM (Random Access Memory) van een computer worden geladen, waardoor snelle en directe toegang tot gegevens mogelijk is zonder de vertragingen van traditionele opslag op schijven. Ze optimaliseren de prestaties van lees- en schrijfbewerkingen, waardoor ze ideaal zijn voor veeleisende toepassingen zoals realtime-analyse, complexe query's en snelle verwerking van grote datasets.",
    color: "bg-orange-500",
    children: [memory.redis.default, memory.memcached.default, memory.sap.default],
  },
];
