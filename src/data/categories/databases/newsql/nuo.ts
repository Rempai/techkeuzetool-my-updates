import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const nuo: Category = {
  name: "NuoDB",
  description:
    "NuoDB is een gedistribueerde SQL-database die schaalbaarheid en elasticiteit biedt, waardoor het eenvoudig kan worden uitgebreid om aan de veranderende eisen van applicaties te voldoen.",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/39/NuoDB.png",
  color: "bg-purple-700",
  sources: [
    {
      name: "NuoDB Website",
      url: "https://www.nuodb.com/",
    },
  ],
  info: "<h3>NuoDB in Database Management</h3>\
            <p>NuoDB is een gedistribueerde SQL-database die is ontworpen om schaalbaarheid en elasticiteit te bieden voor moderne applicaties. Enkele opvallende kenmerken zijn:</p>\
            <ul>\
              <li><strong>Schaalbaarheid en Elasticiteit:</strong> NuoDB kan eenvoudig worden uitgebreid om aan de veranderende eisen van applicaties te voldoen, waardoor het flexibel is voor groeiende workloads.</li>\
              <li><strong>SQL-Compatibiliteit:</strong> Het ondersteunt SQL-query's, waardoor het gemakkelijk te integreren is in bestaande applicaties.</li>\
            </ul><br>\
            <h4>Voordelen van NuoDB:</h4>\
            <ul>\
              <li>✅ Schaalbaarheid voor groeiende workloads.</li>\
              <li>✅ Elasticiteit voor aanpassing aan veranderende vereisten.</li>\
              <li>✅ Compatibiliteit met SQL vergemakkelijkt de ontwikkeling.</li>\
            </ul><br>\
            <h4>Uitdagingen van NuoDB:</h4>\
            <ul>\
              <li>❌ Mogelijk beperktere functies in vergelijking met sommige andere opties.</li>\
              <li>❌ Ondersteuning en community kunnen kleiner zijn dan bij gevestigde databases.</li>\
            </ul><br>\
            <h4>Veelgebruikte Toepassingen:</h4>\
            <p>NuoDB wordt actief gebruikt in scenario's waar schaalbaarheid en elasticiteit cruciaal zijn, zoals cloudgebaseerde applicaties en online diensten.</p>",
};

export default nuo; //dit verander je naar hetzelfde als de const
