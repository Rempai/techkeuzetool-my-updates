import type { Category } from "../../Types";

const penetration: Category = {
  name: "Penetration Testing",
  description:
    "De praktijk van het testen van een computer, systeem, netwerk of webtoepassing om kwetsbaarheden te vinden die een aanvaller kan uitbuiten.",
  color: "bg-red-800",
  sources: [
    {
      name: "Penetration Testing voor beginners",
      url: "https://voorbeeld-link-naar-penetration-testing-voor-beginners",
    },
    {
      name: "Inleiding tot Penetration Testing",
      url: "https://voorbeeld-link-naar-inleiding-penetration-testing",
    },
  ],
  info: "<h3>Penetratietesten voor Beginners</h3>\
            <p>Penetratietesten, ook bekend als ethisch hacken, omvat het beoordelen van systemen en netwerken op kwetsbaarheden om beveiligingsrisico's te identificeren. Voor beginners in penetratietesten zijn hier enkele fundamentele stappen om te begrijpen:</p>\
            <ul>\
              <li><strong>Doelbepaling:</strong> Identificeer het doel en scope van de penetratietest.</li>\
              <li><strong>Scannen en Detecteren:</strong> Gebruik tools om kwetsbaarheden in systemen en netwerken te scannen en detecteren.</li>\
              <li><strong>Exploiteren:</strong> Test actief kwetsbaarheden uit en evalueer de impact.</li>\
            </ul>",
};

export default penetration;
