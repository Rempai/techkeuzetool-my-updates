import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const bigtable: Category = {
  name: "Google Bigtable",
  description:
    "Google Bigtable is een volledig beheerde, schaalbare NoSQL-database die is ontworpen om grote hoeveelheden gegevens te verwerken met hoge doorvoer en lage latentie. Het wordt gebruikt door verschillende Google-services.",
  image: "https://bladebridge.com/wp-content/uploads/2022/01/GCP-BigTable.png",
  color: "bg-yellow-500",
  sources: [
    {
      name: "Google Cloud Bigtable Documentation",
      url: "https://cloud.google.com/bigtable/docs",
    },
  ],
  info: "<h3>Google Bigtable in NoSQL Databases</h3>\
            <p>Google Bigtable is een volledig beheerde, schaalbare NoSQL-database die is ontworpen om grote hoeveelheden gegevens te verwerken met hoge doorvoer en lage latentie. Het wordt gebruikt door verschillende Google-services. Belangrijke kenmerken zijn onder meer:</p>\
            <ul>\
              <li><strong>Volledig Beheerde Service:</strong> Bigtable wordt volledig beheerd door Google Cloud, waardoor gebruikers zich kunnen concentreren op het ontwikkelen van applicaties.</li>\
              <li><strong>Geoptimaliseerd voor Grote Datasets:</strong> Het is geoptimaliseerd voor het verwerken van grote hoeveelheden ongestructureerde gegevens met hoge doorvoer.</li>\
            </ul><br>\
            <h4>Voordelen van Google Bigtable:</h4>\
            <ul>\
              <li>✅ Volledig beheerde service vereist geen infrastructuurbeheer.</li>\
              <li>✅ Schaalbaarheid voor grote datasets met hoge doorvoer.</li>\
              <li>✅ Gebruikt door Google-services zoals Maps, Search en Analytics.</li>\
            </ul><br>\
            <h4>Uitdagingen van Google Bigtable:</h4>\
            <ul>\
              <li>❌ Kosten kunnen hoog zijn voor bepaalde gebruiksscenario's.</li>\
              <li>❌ Minder geschikt voor complexe query's in vergelijking met SQL-databases.</li>\
            </ul><br>\
            <h4>Veelgebruikte Toepassingen:</h4>\
            <p>Google Bigtable wordt veel gebruikt in applicaties die grote hoeveelheden ongestructureerde gegevens moeten verwerken, zoals in analytics, IoT en machine learning.</p>",
};

export default bigtable; //dit verander je naar hetzelfde als de const
