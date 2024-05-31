import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const cassandra: Category = {
  name: "Cassandra",
  description:
    "Apache Cassandra is een gedistribueerde NoSQL-database die is ontworpen voor schaalbaarheid en hoge beschikbaarheid. Het biedt lineaire schaalbaarheid en is geschikt voor het beheren van grote hoeveelheden gedistribueerde gegevens.",
  image: "https://cdn.icon-icons.com/icons2/2699/PNG/512/apache_cassandra_logo_icon_169590.png",
  color: "bg-blue-700",
  sources: [
    {
      name: "Apache Cassandra Documentation",
      url: "https://cassandra.apache.org/doc/",
    },
  ],
  info: "<h3>Cassandra in NoSQL Databases</h3>\
            <p>Apache Cassandra is een gedistribueerde NoSQL-database die is ontworpen voor schaalbaarheid en hoge beschikbaarheid. Het biedt lineaire schaalbaarheid en is geschikt voor het beheren van grote hoeveelheden gedistribueerde gegevens. Belangrijke kenmerken zijn onder meer:</p>\
            <ul>\
              <li><strong>Gedistribueerde Architectuur:</strong> Cassandra verdeelt gegevens over meerdere knooppunten, waardoor het schaalbaar is voor grote datasets.</li>\
              <li><strong>Lineaire Schaalbaarheid:</strong> Het voegt eenvoudig nieuwe knooppunten toe voor schaalbaarheid zonder de bestaande infrastructuur te onderbreken.</li>\
            </ul><br>\
            <h4>Voordelen van Cassandra:</h4>\
            <ul>\
              <li>✅ Gedistribueerde architectuur voor schaalbaarheid en hoge beschikbaarheid.</li>\
              <li>✅ Lineaire schaalbaarheid door eenvoudige toevoeging van nieuwe knooppunten.</li>\
              <li>✅ Geschikt voor toepassingen met grote hoeveelheden schrijfoperaties.</li>\
            </ul><br>\
            <h4>Uitdagingen van Cassandra:</h4>\
            <ul>\
              <li>❌ Complexere querytaal in vergelijking met traditionele SQL-databases.</li>\
              <li>❌ Vereist goede configuratie en beheer voor optimale prestaties.</li>\
            </ul><br>\
            <h4>Veelgebruikte Toepassingen:</h4>\
            <p>Cassandra wordt vaak gebruikt in applicaties met hoge beschikbaarheid en schaalbaarheidsvereisten, zoals in de financiële sector en IoT-toepassingen.</p>",
};

export default cassandra; //dit verander je naar hetzelfde als de const
