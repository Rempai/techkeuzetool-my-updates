import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const cockroach: Category = {
  name: "CockroachDB",
  description:
    "CockroachDB is een gedistribueerde SQL-database die consistentie en beschikbaarheid handhaaft, zelfs in het geval van netwerkpartities en knooppuntstoringen, waardoor het geschikt is voor moderne, gedistribueerde toepassingen.",
  image:
    "https://connect.redhat.com/s3api/prod-s3api/1629218071-logo-url-5e9872712989e6a90307acd6.png",
  color: "bg-blue-700",
  sources: [
    {
      name: "CockroachDB Documentatie",
      url: "https://www.cockroachlabs.com/docs/",
    },
  ],
  info: "<h3>CockroachDB in Database Management</h3>\
            <p>CockroachDB is een krachtige gedistribueerde SQL-database die consistentie en beschikbaarheid handhaaft, zelfs in uitdagende netwerkomstandigheden. Enkele belangrijke kenmerken zijn:</p>\
            <ul>\
              <li><strong>Distributie en Consistentie:</strong> CockroachDB verdeelt gegevens over knooppunten en handhaaft sterke consistentie, waardoor het geschikt is voor moderne, gedistribueerde toepassingen.</li>\
              <li><strong>Schaalbaarheid:</strong> Het kan horizontaal schalen om te voldoen aan de eisen van groeiende applicaties.</li>\
            </ul><br>\
            <h4>Voordelen van CockroachDB:</h4>\
            <ul>\
              <li>✅ Sterke consistentie in gedistribueerde omgevingen.</li>\
              <li>✅ Horizontale schaalbaarheid voor groeiende workloads.</li>\
              <li>✅ Ondersteuning voor SQL-query's vergemakkelijkt de ontwikkeling.</li>\
            </ul><br>\
            <h4>Uitdagingen van CockroachDB:</h4>\
            <ul>\
              <li>❌ Kan complex zijn voor beginners in gedistribueerde databases.</li>\
              <li>❌ Mogelijk hogere beheerkosten in vergelijking met lokale databases.</li>\
            </ul><br>\
            <h4>Veelgebruikte Toepassingen:</h4>\
            <p>CockroachDB wordt actief gebruikt in moderne applicaties met gedistribueerde architecturen, zoals financiële diensten en e-commerce.</p>",
};

export default cockroach; //dit verander je naar hetzelfde als de const
