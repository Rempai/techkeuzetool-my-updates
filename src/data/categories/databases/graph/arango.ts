import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const arango: Category = {
  name: "ArangoDB",
  description:
    "ArangoDB is een multi-model database die zowel document-, grafiek- als sleutel-waardige datamodellen ondersteunt. Het biedt flexibiliteit bij het modelleren van gegevens en is ontworpen voor hoge prestaties en schaalbaarheid.",
  image:
    "https://user-images.githubusercontent.com/7819991/218697980-26ffd7af-cf29-4365-8a5d-504b850fc6b1.png",
  color: "bg-green-600",
  sources: [
    {
      name: "ArangoDB Documentation",
      url: "https://www.arangodb.com/docs/",
    },
  ],
  info: "<h3>ArangoDB in Grafische Databases</h3>\
            <p>ArangoDB is een multi-model database die zowel document-, grafiek- als sleutel-waardige datamodellen ondersteunt. Het biedt flexibiliteit bij het modelleren van gegevens en is ontworpen voor hoge prestaties en schaalbaarheid. Belangrijke kenmerken zijn onder meer:</p>\
            <ul>\
              <li><strong>Multi-Model Ondersteuning:</strong> Ondersteunt document-, grafiek- en sleutel-waardige datamodellen in één database-engine.</li>\
              <li><strong>Flexibel Gegevensmodellering:</strong> Biedt flexibiliteit bij het modelleren van complexe gegevensstructuren.</li>\
            </ul><br>\
            <h4>Voordelen van ArangoDB:</h4>\
            <ul>\
              <li>✅ Multi-model ondersteuning voor diverse gegevensmodellen in één database.</li>\
              <li>✅ Flexibiliteit bij het modelleren van gegevensstructuren voor verschillende use-cases.</li>\
              <li>✅ Hoge prestaties en schaalbaarheid.</li>\
            </ul><br>\
            <h4>Uitdagingen van ArangoDB:</h4>\
            <ul>\
              <li>❌ Mogelijk minder gespecialiseerd voor specifieke datamodellen in vergelijking met gespecialiseerde databases.</li>\
              <li>❌ Kan complexer zijn voor eenvoudige datamodellering in vergelijking met specifieke datamodellen.</li>\
            </ul><br>\
            <h4>Veelgebruikte Toepassingen:</h4>\
            <p>ArangoDB wordt vaak gebruikt in situaties waarin flexibiliteit in gegevensmodellering en ondersteuning voor meerdere datamodellen vereist zijn, zoals in contentbeheersystemen, aanbevelingssystemen en sociale netwerken.</p>",
};

export default arango; //dit verander je naar hetzelfde als de const
