import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const memcached: Category = {
  name: "Memcached",
  description:
    "Memcached is een open-source, gedistribueerd geheugencache-systeem dat wordt gebruikt om de prestaties van webtoepassingen te verbeteren door veelgebruikte gegevens in het geheugen op te slaan.",
  image: "https://dbdb.io/media/logos/memcached2021.svg",
  color: "bg-blue-500",
  sources: [
    {
      name: "Memcached Documentation",
      url: "https://memcached.org/documentation",
    },
  ],
  info: "<h3>Memcached in Caching</h3>\
            <p>Memcached is een gedistribueerd geheugencache-systeem dat is ontworpen om de prestaties van webtoepassingen te verbeteren door veelgebruikte gegevens in het geheugen op te slaan. Belangrijke kenmerken zijn onder meer:</p>\
            <ul>\
              <li><strong>Distributed Caching:</strong> Memcached verdeelt de cache over meerdere servers, waardoor het schaalbaar is voor grote belasting.</li>\
              <li><strong>Eenvoudig Sleutelwaarde-Opslag:</strong> Het slaat gegevens op als sleutel-waardeparen en biedt snelle toegang tot opgeslagen informatie.</li>\
            </ul><br>\
            <h4>Voordelen van Memcached:</h4>\
            <ul>\
              <li>✅ Snelle toegang tot veelgebruikte gegevens dankzij in-memory caching.</li>\
              <li>✅ Eenvoudige implementatie en integratie met verschillende programmeertalen.</li>\
              <li>✅ Schaalbaar voor grote belasting door distributie over meerdere servers.</li>\
            </ul><br>\
            <h4>Uitdagingen van Memcached:</h4>\
            <ul>\
              <li>❌ Beperkte functionaliteit vergeleken met volledige databases.</li>\
              <li>❌ Geen ingebouwde beveiligings- of autorisatiemogelijkheden.</li>\
            </ul><br>\
            <h4>Veelgebruikte Toepassingen:</h4>\
            <p>Memcached wordt vaak gebruikt in webtoepassingen om de prestaties te verbeteren door veelgebruikte gegevens in het geheugen op te slaan, zoals sessiegegevens en queryresultaten.</p>",
};

export default memcached; //dit verander je naar hetzelfde als de const
