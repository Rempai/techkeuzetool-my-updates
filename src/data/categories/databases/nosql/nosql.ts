import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const nosql: Category = {
  name: "NoSQL",
  description:
    "NoSQL verwijst naar een categorie van databases die niet gebaseerd zijn op het traditionele relationele model van SQL. In plaats daarvan gebruiken ze verschillende datamodellen, zoals documenten, grafieken of sleutel-waardeparen, om gegevens op te slaan. NoSQL-databases zijn flexibel en schaalbaar, waardoor ze geschikt zijn voor diverse toepassingen.",
  color: "bg-emerald-700",
  image: "https://www.javacodegeeks.com/wp-content/uploads/2018/12/3-300x300.png",
  sources: [
    {
      name: "Introductie tot NoSQL",
      url: "https://www.example.com/intro-to-nosql",
    },
    {
      name: "Verschillende types NoSQL-databases",
      url: "https://www.example.com/types-of-nosql-databases",
    },
    {
      name: "Wanneer te kiezen voor NoSQL",
      url: "https://www.example.com/when-to-choose-nosql",
    },
  ],
  info:
    "<p>NoSQL omvat een breed scala aan databases die niet vastzitten aan de structuur van relationele databases. Deze systemen zijn ontworpen om te voldoen aan de eisen van moderne applicaties, waar flexibiliteit, schaalbaarheid en snelle gegevensverwerking cruciaal zijn.</p>" +
    "<br>" +
    "<p>Er zijn verschillende typen NoSQL-databases, waaronder documentgebaseerde databases zoals MongoDB, sleutel-waardeopslag zoals Redis, kolomgebaseerde databases zoals Apache Cassandra, en grafiekdatabases zoals Neo4j.</p>" +
    "<p>NoSQL-databases zijn bijzonder geschikt voor scenario's waarin de structuur van de gegevens kan variëren of waar snelle en schaalbare gegevensverwerking vereist is, zoals bij grote hoeveelheden ongestructureerde gegevens of real-time toepassingen.</p>" +
    "<p>Hoewel NoSQL flexibiliteit biedt, is het belangrijk om de specifieke kenmerken van elke NoSQL-database te begrijpen om de juiste keuze te maken voor een bepaalde toepassing. NoSQL is vaak de voorkeurskeuze in situaties waar traditionele relationele databases beperkingen vertonen.</p>",
};

export default nosql; //dit verander je naar hetzelfde als de const
