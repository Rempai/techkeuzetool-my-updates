import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const opentsdb: Category = {
  name: "OpenTSDB",
  description:
    "OpenTSDB is een gedistribueerde en schaalbare tijdseries-database die is gebouwd bovenop Apache HBase. Het is geoptimaliseerd voor het opslaan en ophalen van grote hoeveelheden tijdreeksgegevens.",
  image:
    "https://lh3.googleusercontent.com/proxy/UxqjW2yY7sLV23Iue5-p1atM9a2jxKpIvBSiPywTlJpRxhg09GqLqWMLcGJwYeP3oWX3FUUBtr3Mv_7nXFL8",
  color: "bg-orange-700",
  sources: [
    {
      name: "OpenTSDB Documentation",
      url: "http://opentsdb.net/docs/build/html/",
    },
  ],
  info: "<h3>OpenTSDB in Database Management</h3>\
            <p>OpenTSDB is een krachtige gedistribueerde tijdseries-database die is gebouwd op Apache HBase en geoptimaliseerd is voor het beheren van grote hoeveelheden tijdreeksgegevens. Belangrijke kenmerken zijn onder meer:</p>\
            <ul>\
              <li><strong>Gedistribueerde Opslag:</strong> OpenTSDB maakt gebruik van Apache HBase voor gedistribueerde opslag, waardoor het schaalbaar is voor grote datasets.</li>\
              <li><strong>Robuuste Querymogelijkheden:</strong> Het biedt krachtige querymogelijkheden voor het ophalen van specifieke tijdreeksgegevens.</li>\
            </ul><br>\
            <h4>Voordelen van OpenTSDB:</h4>\
            <ul>\
              <li>✅ Schaalbaarheid voor het beheer van grote hoeveelheden tijdreeksgegevens.</li>\
              <li>✅ Gedistribueerde opslag voor betrouwbaarheid en prestaties.</li>\
              <li>✅ Ondersteuning voor krachtige queries vergemakkelijkt gegevensanalyse.</li>\
            </ul><br>\
            <h4>Uitdagingen van OpenTSDB:</h4>\
            <ul>\
              <li>❌ Vereist mogelijk configuratie van Apache HBase voor optimale prestaties.</li>\
              <li>❌ Leercurve voor gebruikers die niet bekend zijn met gedistribueerde databases.</li>\
            </ul><br>\
            <h4>Veelgebruikte Toepassingen:</h4>\
            <p>OpenTSDB wordt actief gebruikt in scenario's waarin gedetailleerde monitoring en analyse van tijdreeksgegevens essentieel zijn, zoals in de IoT-sector en bij systeemprestatiebewaking.</p>",
};

export default opentsdb; //dit verander je naar hetzelfde als de const
