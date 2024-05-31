import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const spanner: Category = {
  name: "Google Spanner",
  description:
    "Google Spanner is een gedistribueerde, relationele database die horizontale schaalbaarheid biedt zonder concessies te doen aan consistentie en SQL-query's mogelijk maakt over wereldwijde geografische locaties.",
  image:
    "https://www.zdnet.com/a/img/2017/11/14/a0641c5a-1404-4ed6-a564-43931e35cb2f/spanner-logo.png",
  color: "bg-green-700",
  sources: [
    {
      name: "Google Spanner Documentatie",
      url: "https://cloud.google.com/spanner/docs",
    },
  ],
  info: "<h3>Google Spanner in Database Management</h3>\
            <p>Google Spanner is een geavanceerde gedistribueerde database die de voordelen van horizontale schaalbaarheid combineert met relationele databasetechnologie. Hier zijn enkele belangrijke kenmerken:</p>\
            <ul>\
              <li><strong>Horizontale Schaalbaarheid:</strong> Spanner kan moeiteloos schalen over meerdere knooppunten en datacenters, wat het ideaal maakt voor wereldwijde toepassingen.</li>\
              <li><strong>Consistentie en SQL:</strong> Het behoudt sterke consistentie en maakt het mogelijk om SQL-query's uit te voeren, waardoor het geschikt is voor zowel transactie-intensieve als analytische workloads.</li>\
            </ul><br>\
            <h4>Voordelen van Google Spanner:</h4>\
            <ul>\
              <li>✅ Horizontale schaalbaarheid zonder concessies aan consistentie.</li>\
              <li>✅ Globale SQL-query's voor wereldwijde toepassingen.</li>\
              <li>✅ Sterke consistentie voor betrouwbare transacties.</li>\
            </ul><br>\
            <h4>Uitdagingen van Google Spanner:</h4>\
            <ul>\
              <li>❌ Complexiteit kan een leercurve veroorzaken.</li>\
              <li>❌ Kosten kunnen hoger zijn dan sommige andere opties.</li>\
            </ul><br>\
            <h4>Veelgebruikte Toepassingen:</h4>\
            <p>Google Spanner wordt actief gebruikt voor wereldwijde applicaties met complexe data-eisen, zoals financiële systemen en IoT-toepassingen.</p>",
};

export default spanner; //dit verander je naar hetzelfde als de const
