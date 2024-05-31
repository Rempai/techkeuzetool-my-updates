import type { Category } from "../../Types";

const dart: Category = {
  name: "Dart",
  description:
    "Dart is een programmeertaal ontwikkeld door Google, met name geschikt voor het bouwen van mobiele, desktop, server en webapplicaties.",
  image:
    "data:image/png;base64,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",
  color: "bg-pink-700",
  sources: [
    {
      name: "Tutorials voor Dart",
      url: "https://dart-tutorial.com/",
    },
    {
      name: "Dart Website",
      url: "https://dart.dev/",
    },
  ],
  info: "<h3>Dart in App Development</h3>\
            <p>Dart is een krachtige programmeertaal ontwikkeld door Google, die uitblinkt in de ontwikkeling van diverse soorten applicaties. Hier zijn enkele kenmerken van Dart in de context van app-ontwikkeling:</p>\
            <ul>\
              <li><strong>Flutter-framework:</strong> Dart wordt vaak gebruikt in combinatie met het Flutter-framework voor het bouwen van cross-platform mobiele apps met een gedeelde codebase.</li>\
              <li><strong>Hot Reload:</strong> Dart's hot reload-functie versnelt het ontwikkelingsproces door directe updates mogelijk te maken zonder de app opnieuw te starten.</li>\
            </ul><br>\
            <h4>Pluspunten van Dart:</h4>\
            <ul>\
              <li>✅ Hot reload verbetert de ontwikkelingsefficiëntie.</li>\
              <li>✅ Goede performance, met name bij het gebruik van Flutter.</li>\
              <li>✅ Uitgebreide standaardbibliotheek vergemakkelijkt de ontwikkeling.</li>\
            </ul><br>\
            <h4>Minpunten van Dart:</h4>\
            <ul>\
              <li>❌ Kleinere community in vergelijking met sommige andere talen.</li>\
            </ul><br>\
            <h4>Actief Gebruikt Voor:</h4>\
            <p>Dart wordt actief gebruikt voor mobiele app-ontwikkeling, vooral in combinatie met het Flutter-framework.</p>",
};

export default dart;
