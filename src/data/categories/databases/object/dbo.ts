import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const dbo: Category = {
  name: "db4o",
  description:
    "db4o is een objectgeoriënteerde database die is ontworpen voor het opslaan en ophalen van objecten in plaats van traditionele relationele gegevens. Het maakt gebruik van een embedded database-engine en ondersteunt Java en .NET-ontwikkelomgevingen.",
  image: "https://dbdb.io/media/logos/db40.png",
  color: "bg-purple-600",
  sources: [
    {
      name: "db4o Documentation",
      url: "https://community.oracle.com/docs/DOC-983543",
    },
  ],
  info: "<h3>db4o in Objectgeoriënteerde Databases</h3>\
            <p>db4o is een objectgeoriënteerde database die is ontworpen voor het opslaan en ophalen van objecten in plaats van traditionele relationele gegevens. Het maakt gebruik van een embedded database-engine en ondersteunt Java en .NET-ontwikkelomgevingen. Belangrijke kenmerken zijn onder meer:</p>\
            <ul>\
              <li><strong>Objectgeoriënteerde Aanpak:</strong> Opslag van objecten en relaties tussen objecten zonder de noodzaak van een mapping naar relationele tabellen.</li>\
              <li><strong>Embedded Database:</strong> Kan worden ingebed in applicaties, waardoor het een lichtgewicht oplossing is.</li>\
            </ul><br>\
            <h4>Voordelen van db4o:</h4>\
            <ul>\
              <li>✅ Directe opslag en ophalen van objecten zonder mapping naar tabellen.</li>\
              <li>✅ Ondersteuning voor Java en .NET-ontwikkelomgevingen.</li>\
              <li>✅ Embedded database voor eenvoudige integratie met applicaties.</li>\
            </ul><br>\
            <h4>Uitdagingen van db4o:</h4>\
            <ul>\
              <li>❌ Minder geschikt voor complexe query's in vergelijking met sommige relationele databases.</li>\
              <li>❌ Kleinere community en minder brede adoptie in vergelijking met relationele databases.</li>\
            </ul><br>\
            <h4>Veelgebruikte Toepassingen:</h4>\
            <p>db4o wordt vaak gebruikt in applicaties waar objectgeoriënteerde modellering een belangrijke rol speelt, zoals in softwareontwikkeling voor IoT en mobiele toepassingen.</p>",
};

export default dbo; //dit verander je naar hetzelfde als de const
