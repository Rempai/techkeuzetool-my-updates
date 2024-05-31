import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const neptune: Category = {
  name: "Amazon Neptune",
  description:
    "Amazon Neptune is een volledig beheerde, schaalbare grafische database die is ontworpen om te voldoen aan de hoge prestatie- en betrouwbaarheidseisen van moderne applicaties. Het ondersteunt zowel het eigendomsgrafmodel als het RDF-model.",
  image: "https://dbdb.io/media/logos/amazon-neptune.png",
  color: "bg-indigo-600",
  sources: [
    {
      name: "Amazon Neptune Documentation",
      url: "https://docs.aws.amazon.com/neptune/latest/userguide/what-is-neptune.html",
    },
  ],
  info: "<h3>Amazon Neptune in Grafische Databases</h3>\
            <p>Amazon Neptune is een volledig beheerde, schaalbare grafische database die is ontworpen om te voldoen aan de hoge prestatie- en betrouwbaarheidseisen van moderne applicaties. Het ondersteunt zowel het eigendomsgrafmodel als het RDF-model. Belangrijke kenmerken zijn onder meer:</p>\
            <ul>\
              <li><strong>Volledig Beheerde Service:</strong> Amazon Neptune wordt beheerd door AWS, waardoor gebruikers zich kunnen concentreren op het ontwikkelen van applicaties in plaats van het beheren van de database-infrastructuur.</li>\
              <li><strong>Ondersteuning voor Eigendomsgraf en RDF:</strong> Biedt flexibiliteit door zowel het eigendomsgrafmodel als het RDF-model te ondersteunen.</li>\
            </ul><br>\
            <h4>Voordelen van Amazon Neptune:</h4>\
            <ul>\
              <li>✅ Volledig beheerde service met schaalbaarheid en betrouwbaarheid van AWS.</li>\
              <li>✅ Ondersteuning voor zowel eigendomsgraf als RDF voor flexibele gegevensmodellering.</li>\
              <li>✅ Geoptimaliseerd voor hoge prestaties bij grafische gegevensverwerking.</li>\
            </ul><br>\
            <h4>Uitdagingen van Amazon Neptune:</h4>\
            <ul>\
              <li>❌ Kan hogere kosten met zich meebrengen in vergelijking met zelfgehoste oplossingen.</li>\
              <li>❌ Mogelijk minder geschikt voor situaties met strikte budgetbeperkingen.</li>\
            </ul><br>\
            <h4>Veelgebruikte Toepassingen:</h4>\
            <p>Amazon Neptune wordt vaak gebruikt in applicaties waar grafgegevensverwerking essentieel is, zoals in kennisgrafieken, aanbevelingssystemen en netwerkanalyse.</p>",
};

export default neptune; //dit verander je naar hetzelfde als de const
