import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const neo: Category = {
  name: "Neo4j",
  description:
    "Neo4j is een grafische database die is geoptimaliseerd voor het opslaan en bevragen van gegevens met complexe relaties. Het maakt gebruik van een eigendomsgrafmodel en biedt krachtige mogelijkheden voor het analyseren van verbonden gegevens.",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Neo4j-logo_color.png",
  color: "bg-blue-600",
  sources: [
    {
      name: "Neo4j Documentation",
      url: "https://neo4j.com/docs/",
    },
  ],
  info: "<h3>Neo4j in Grafische Databases</h3>\
            <p>Neo4j is een grafische database die is geoptimaliseerd voor het opslaan en bevragen van gegevens met complexe relaties. Het maakt gebruik van een eigendomsgrafmodel en biedt krachtige mogelijkheden voor het analyseren van verbonden gegevens. Belangrijke kenmerken zijn onder meer:</p>\
            <ul>\
              <li><strong>Grafgeoriënteerd Model:</strong> Gegevens worden opgeslagen als knooppunten en relaties, waardoor complexe relaties gemakkelijk kunnen worden weergegeven.</li>\
              <li><strong>Cypher Query Language:</strong> Neo4j maakt gebruik van de Cypher-querytaal, die is geoptimaliseerd voor het bevragen van grafgegevens.</li>\
            </ul><br>\
            <h4>Voordelen van Neo4j:</h4>\
            <ul>\
              <li>✅ Uitstekend geschikt voor situaties met complexe relaties en verbonden gegevens.</li>\
              <li>✅ Grafgeoriënteerd model biedt flexibiliteit bij het modelleren van relaties.</li>\
              <li>✅ Krachtige querytaal (Cypher) voor het uitvoeren van complexe bevragingen.</li>\
            </ul><br>\
            <h4>Uitdagingen van Neo4j:</h4>\
            <ul>\
              <li>❌ Mogelijk minder geschikt voor situaties met voornamelijk eenvoudige, gestructureerde gegevens.</li>\
              <li>❌ Kan hogere resourcevereisten hebben bij grootschalige gegevenssets.</li>\
            </ul><br>\
            <h4>Veelgebruikte Toepassingen:</h4>\
            <p>Neo4j wordt vaak gebruikt in situaties waarin het begrijpen en analyseren van complexe relaties cruciaal is, zoals in sociale netwerken, fraudeopsporing en aanbevelingssystemen.</p>",
};

export default neo; //dit verander je naar hetzelfde als de const
