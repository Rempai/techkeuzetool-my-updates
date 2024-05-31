import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const objectstore: Category = {
  name: "ObjectStore",
  description:
    "ObjectStore is een objectgeoriënteerde database die is ontworpen voor het beheren van objectgegevens met een nadruk op prestaties en schaalbaarheid. Het biedt ondersteuning voor complexe datamodellen en snelle toegang tot objecten.",
  image: "https://dbdb.io/media/logos/objectstore.svg",
  color: "bg-teal-600",
  sources: [
    {
      name: "ObjectStore Documentation",
      url: "https://www.progress.com/docs/default-source/sitefinity-cms/products/objectstore/objectstore-documentation/index.html",
    },
  ],
  info: "<h3>ObjectStore in Objectgeoriënteerde Databases</h3>\
            <p>ObjectStore is een objectgeoriënteerde database die is ontworpen voor het beheren van objectgegevens met een nadruk op prestaties en schaalbaarheid. Het biedt ondersteuning voor complexe datamodellen en snelle toegang tot objecten. Belangrijke kenmerken zijn onder meer:</p>\
            <ul>\
              <li><strong>Prestaties en Schaalbaarheid:</strong> Ontworpen voor optimale prestaties en schaalbaarheid bij het beheren van grote hoeveelheden objectgegevens.</li>\
              <li><strong>Ondersteuning voor Complexiteit:</strong> Kan complexe datamodellen aanpakken en biedt flexibele queryopties.</li>\
            </ul><br>\
            <h4>Voordelen van ObjectStore:</h4>\
            <ul>\
              <li>✅ Geoptimaliseerd voor prestaties en schaalbaarheid bij het beheren van grote hoeveelheden objectgegevens.</li>\
              <li>✅ Ondersteuning voor complexe datamodellen en flexibele queryopties.</li>\
              <li>✅ Mogelijkheid om te schalen naar grotere gegevensvolumes.</li>\
            </ul><br>\
            <h4>Uitdagingen van ObjectStore:</h4>\
            <ul>\
              <li>❌ Mogelijk minder geschikt voor eenvoudige datamodellen en kleinere datasets.</li>\
              <li>❌ Mogelijk beperktere gemeenschapsbetrokkenheid in vergelijking met bredere databasesystemen.</li>\
            </ul><br>\
            <h4>Veelgebruikte Toepassingen:</h4>\
            <p>ObjectStore wordt vaak gebruikt in situaties waarin prestaties en schaalbaarheid cruciaal zijn, zoals in grootschalige bedrijfsapplicaties en IoT-toepassingen.</p>",
};

export default objectstore; //dit verander je naar hetzelfde als de const
