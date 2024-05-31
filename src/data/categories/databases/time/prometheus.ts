import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const prometheus: Category = {
  name: "Prometheus",
  description:
    "Prometheus is een open-source monitoring- en alerteringssysteem dat is ontworpen voor schaalbare en flexibele monitoring van containergebaseerde omgevingen en gedistribueerde systemen.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/1200px-Prometheus_software_logo.svg.png",
  color: "bg-red-700",
  sources: [
    {
      name: "Prometheus Documentation",
      url: "https://prometheus.io/docs/introduction/overview/",
    },
  ],
  info: "<h3>Prometheus in Monitoring</h3>\
            <p>Prometheus is een krachtig open-source monitoring- en alerteringssysteem dat is ontworpen voor gedistribueerde systemen en containergebaseerde omgevingen. Enkele opmerkelijke kenmerken zijn:</p>\
            <ul>\
              <li><strong>Schaalbare Monitoring:</strong> Prometheus biedt schaalbare monitoring van services en infrastructuren, inclusief automatische ontdekking van doelen.</li>\
              <li><strong>Flexibele Query Language:</strong> Het maakt gebruik van PromQL, een krachtige querytaal, waarmee gebruikers complexe analyses kunnen uitvoeren.</li>\
            </ul><br>\
            <h4>Voordelen van Prometheus:</h4>\
            <ul>\
              <li>✅ Schaalbaarheid voor monitoring van gedistribueerde systemen.</li>\
              <li>✅ Automatische ontdekking van doelen vergemakkelijkt configuratie.</li>\
              <li>✅ Actieve community en ondersteuning voor integraties.</li>\
            </ul><br>\
            <h4>Uitdagingen van Prometheus:</h4>\
            <ul>\
              <li>❌ Kan enige configuratie en setup vereisen voor optimale prestaties.</li>\
              <li>❌ Opslag en queryprestaties kunnen uitdagingen opleveren bij zeer grote datasets.</li>\
            </ul><br>\
            <h4>Veelgebruikte Toepassingen:</h4>\
            <p>Prometheus wordt veel gebruikt voor monitoring en alertering in cloudomgevingen, containerorkestratiesystemen zoals Kubernetes, en gedistribueerde microservices-architecturen.</p>",
};

export default prometheus; //dit verander je naar hetzelfde als de const
