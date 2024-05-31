import type { Category } from "../../Types";

const cryptografie: Category = {
  name: "Cryptografie",
  description:
    "De praktijk en studie van technieken voor beveiligde communicatie in de aanwezigheid van derden.",
  color: "bg-indigo-700",
  sources: [
    {
      name: "Cryptografie voor beginners",
      url: "https://voorbeeld-link-naar-cryptografie-voor-beginners",
    },
    {
      name: "Inleiding tot Cryptografie",
      url: "https://voorbeeld-link-naar-inleiding-cryptografie",
    },
  ],
  info: "<h3>Cryptografie voor Beginners</h3>\
            <p>Cryptografie omvat technieken voor het beveiligen van communicatie en gegevens door ze te coderen. Voor beginners in cryptografie zijn hier enkele essentiële concepten om te verkennen:</p>\
            <ul>\
              <li><strong>Coderingsalgoritmen:</strong> Leer over verschillende coderingsalgoritmen, zoals AES en RSA.</li>\
              <li><strong>Asymmetrische en Symmetrische Sleutels:</strong> Begrijp het verschil tussen asymmetrische en symmetrische sleutels voor versleuteling.</li>\
              <li><strong>Hashfuncties:</strong> Ontdek het gebruik van hashfuncties voor integriteitscontrole.</li>\
            </ul>",
};

export default cryptografie;
