import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const objectdb: Category = {
  name: "ObjectDB",
  description:
    "ObjectDB is een objectgeoriënteerde database die is ontworpen voor het opslaan en beheren van objecten in Java-toepassingen. Het biedt transactieondersteuning en snelle toegang tot objectgegevens zonder de noodzaak van een relationele mapping.",
  image: "https://dbdb.io/media/logos/objectdb.png",
  color: "bg-orange-600",
  sources: [
    {
      name: "ObjectDB Documentation",
      url: "https://www.objectdb.com/java/jpa",
    },
  ],
  info: "<h3>ObjectDB in Objectgeoriënteerde Databases</h3>\
            <p>ObjectDB is een objectgeoriënteerde database die is ontworpen voor het opslaan en beheren van objecten in Java-toepassingen. Het biedt transactieondersteuning en snelle toegang tot objectgegevens zonder de noodzaak van een relationele mapping. Belangrijke kenmerken zijn onder meer:</p>\
            <ul>\
              <li><strong>Native Ondersteuning voor Java:</strong> Volledig geïntegreerd met Java-toepassingen, waardoor een naadloze interactie mogelijk is.</li>\
              <li><strong>Transactieondersteuning:</strong> Biedt ondersteuning voor transacties voor consistente gegevensoperaties.</li>\
            </ul><br>\
            <h4>Voordelen van ObjectDB:</h4>\
            <ul>\
              <li>✅ Native ondersteuning voor Java met eenvoudige integratie.</li>\
              <li>✅ Snelle toegang tot objectgegevens zonder noodzaak van relationele mapping.</li>\
              <li>✅ Transactieondersteuning voor consistente gegevensoperaties.</li>\
            </ul><br>\
            <h4>Uitdagingen van ObjectDB:</h4>\
            <ul>\
              <li>❌ Beperkter ecosysteem in vergelijking met sommige relationele databases.</li>\
              <li>❌ Kan minder geschikt zijn voor niet-Java-toepassingen.</li>\
            </ul><br>\
            <h4>Veelgebruikte Toepassingen:</h4>\
            <p>ObjectDB wordt vaak gebruikt in Java-toepassingen waar objectgeoriënteerde modellering belangrijk is, zoals in bedrijfs- en webapplicaties.</p>",
};

export default objectdb; //dit verander je naar hetzelfde als de const
