import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const influx: Category = {
  name: "InfluxDB",
  description:
    "InfluxDB is een op tijdseries gebaseerde database die is geoptimaliseerd voor het opslaan, ophalen en bewerken van tijdgevoelige gegevens, waardoor het ideaal is voor monitoring, analytics en IoT-toepassingen.",
  image: "https://dbdb.io/media/logos/InfluxDB.png",
  color: "bg-yellow-700",
  sources: [
    {
      name: "InfluxDB Documentation",
      url: "https://docs.influxdata.com/influxdb/",
    },
  ],
  info: "<h3>InfluxDB in Database Management</h3>\
            <p>InfluxDB is een krachtige tijdseries-database die is ontworpen voor het beheren van gegevens met tijdsafhankelijke waarde. Hier zijn enkele belangrijke kenmerken:</p>\
            <ul>\
              <li><strong>Tijdseries-Orientatie:</strong> InfluxDB is geoptimaliseerd voor het opslaan en bewerken van tijdgevoelige gegevens, waardoor het geschikt is voor toepassingen zoals monitoring, analytics en IoT.</li>\
              <li><strong>Flexibele Query Taal:</strong> Het maakt gebruik van InfluxQL, een op SQL-gebaseerde querytaal, voor het uitvoeren van analyses en het ophalen van gegevens.</li>\
            </ul><br>\
            <h4>Voordelen van InfluxDB:</h4>\
            <ul>\
              <li>✅ Optimalisatie voor tijdreeksen maakt het efficiënt voor monitoring.</li>\
              <li>✅ Krachtige querytaal vergemakkelijkt gegevensanalyse.</li>\
              <li>✅ Ondersteuning voor diverse use cases, waaronder IoT en analytics.</li>\
            </ul><br>\
            <h4>Uitdagingen van InfluxDB:</h4>\
            <ul>\
              <li>❌ Mogelijk complex voor beginners in tijdseries-databases.</li>\
              <li>❌ Beheer van grote datasets kan uitdagend zijn.</li>\
            </ul><br>\
            <h4>Veelgebruikte Toepassingen:</h4>\
            <p>InfluxDB wordt actief gebruikt in applicaties waar tijdgevoelige gegevens een rol spelen, zoals monitoring van IT-infrastructuur en industriële IoT-toepassingen.</p>",
};

export default influx; //dit verander je naar hetzelfde als de const
