import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const firebase: Category = {
  name: "Firebase",
  description:
    "Firebase is een uitgebreid platform van Google dat diverse diensten biedt voor het ontwikkelen van mobiele en webapplicaties. Het maakt gebruik van een NoSQL-database genaamd Cloud Firestore en biedt ook realtime databasefunctionaliteit. Hoewel het niet strikt SQL-gebaseerd is, is het relevant in het context van databases en app-ontwikkeling.",
  color: "bg-emerald-700",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1280px-Firebase_Logo.svg.png",
  sources: [
    {
      name: "Firebase-documentatie",
      url: "https://firebase.google.com/docs",
    },
    {
      name: "Firebase Realtime Database",
      url: "https://firebase.google.com/docs/database",
    },
    {
      name: "Cloud Firestore",
      url: "https://firebase.google.com/docs/firestore",
    },
  ],
  info:
    "<p>Firebase biedt een cloudgebaseerd platform dat ontwikkelaars in staat stelt om snel en efficiënt krachtige applicaties te bouwen. Het maakt gebruik van een NoSQL-database genaamd Cloud Firestore, die flexibiliteit biedt bij het opslaan en ophalen van gegevens.</p>" +
    "<br>" +
    "<p>Met Firebase kunnen ontwikkelaars real-time updates implementeren via de Realtime Database-functionaliteit. Het ondersteunt ook andere diensten zoals authenticatie, hosting, cloudopslag, en functies voor het beheer van gebruikers en app-prestaties.</p>" +
    "<p>Cloud Firestore, een onderdeel van Firebase, biedt een schaalbare NoSQL-database die gebruikmaakt van documenten en collecties voor gegevensopslag. Het is ontworpen voor het werken met moderne applicaties die realtime updates vereisen.</p>" +
    "<p>Ontwikkelaars kunnen de Firebase SDK integreren met hun mobiele en webapplicaties om snel toegang te krijgen tot de functies van Firebase. De documentatie van Firebase is een waardevolle bron voor het begrijpen van de verschillende mogelijkheden en integraties.</p>",
};

export default firebase; //dit verander je naar hetzelfde als de const
