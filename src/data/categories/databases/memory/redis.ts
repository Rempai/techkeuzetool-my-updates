import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const redis: Category = {
  name: "Redis",
  description:
    "Redis is een open-source, in-memory datastructuur store die kan fungeren als database, cache en message broker. Het staat bekend om zijn snelle prestaties en veelzijdige toepassingen.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Logo-redis.svg/1200px-Logo-redis.svg.png",
  color: "bg-red-500",
  sources: [
    {
      name: "Redis Documentation",
      url: "https://redis.io/documentation",
    },
  ],
  info: "<h3>Redis in Database Management</h3>\
            <p>Redis is een krachtige in-memory datastructuur store die wordt gebruikt voor verschillende doeleinden, waaronder databases, caching en message brokering. Hier zijn enkele belangrijke kenmerken:</p>\
            <ul>\
              <li><strong>In-Memory Opslag:</strong> Redis bewaart gegevens volledig in het RAM-geheugen, wat zorgt voor zeer snelle toegang en respons.</li>\
              <li><strong>Versatile Datastructuren:</strong> Het ondersteunt diverse datastructuren zoals strings, sets, hashes, en meer.</li>\
            </ul><br>\
            <h4>Voordelen van Redis:</h4>\
            <ul>\
              <li>✅ Ultrasnelle toegang tot gegevens dankzij in-memory opslag.</li>\
              <li>✅ Ondersteunt geavanceerde datastructuren voor flexibele toepassingen.</li>\
              <li>✅ Breed scala aan toepassingen, waaronder caching en real-time analytics.</li>\
            </ul><br>\
            <h4>Uitdagingen van Redis:</h4>\
            <ul>\
              <li>❌ Beperkte opslagcapaciteit in vergelijking met sommige andere databases.</li>\
              <li>❌ Bij een herstart gaan alle gegevens verloren, omdat het volledig in-memory is.</li>\
            </ul><br>\
            <h4>Veelgebruikte Toepassingen:</h4>\
            <p>Redis wordt veel gebruikt voor caching, real-time analyses, en als snelle databaseoplossing in situaties waarin hoge prestaties essentieel zijn.</p>",
};

export default redis; //dit verander je naar hetzelfde als de const
