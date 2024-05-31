import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const apache: Category = {
  name: "Apache HBase",
  description:
    "Apache HBase is een gedistribueerde, schaalbare, NoSQL-database die is gebouwd op het Hadoop Distributed File System (HDFS). Het is ontworpen voor het opslaan van grote hoeveelheden gegevens met hoge doorvoer en lage latentie.",
  image: "https://cdn.worldvectorlogo.com/logos/apache-hbase-logo.svg",
  color: "bg-green-500",
  sources: [
    {
      name: "Apache HBase Documentation",
      url: "https://hbase.apache.org/book.html",
    },
  ],
  info: "<h3>Apache HBase in NoSQL Databases</h3>\
            <p>Apache HBase is een gedistribueerde, schaalbare NoSQL-database die is gebouwd op het Hadoop Distributed File System (HDFS). Het is ontworpen voor het opslaan van grote hoeveelheden gegevens met hoge doorvoer en lage latentie. Belangrijke kenmerken zijn onder meer:</p>\
            <ul>\
              <li><strong>Gedistribueerde Opslag:</strong> HBase verdeelt gegevens over meerdere knooppunten om schaalbaarheid te bieden voor grote datasets.</li>\
              <li><strong>Tabulair Gegevensmodel:</strong> Het biedt een tabulair gegevensmodel met rijen en kolommen, vergelijkbaar met een relationele database.</li>\
            </ul><br>\
            <h4>Voordelen van Apache HBase:</h4>\
            <ul>\
              <li>✅ Gedistribueerde opslag voor schaalbaarheid en betrouwbaarheid.</li>\
              <li>✅ Geschikt voor snelle toegang tot grote hoeveelheden ongestructureerde gegevens.</li>\
              <li>✅ Integratie met het Hadoop-ecosysteem voor geavanceerde analyses.</li>\
            </ul><br>\
            <h4>Uitdagingen van Apache HBase:</h4>\
            <ul>\
              <li>❌ Complexere configuratie en beheer in vergelijking met sommige andere databases.</li>\
              <li>❌ Query's kunnen minder flexibel zijn in vergelijking met SQL-databases.</li>\
            </ul><br>\
            <h4>Veelgebruikte Toepassingen:</h4>\
            <p>Apache HBase wordt vaak gebruikt in scenario's waarin snelle toegang tot grote hoeveelheden ongestructureerde gegevens vereist is, zoals in de analytics- en IoT-sector.</p>",
};

export default apache; //dit verander je naar hetzelfde als de const
