import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const sql: Category = {
  name: "SQL",
  description:
    "SQL is een gestandaardiseerde programmeertaal die wordt gebruikt voor het beheren en manipuleren van relationele databases. Het stelt gebruikers in staat om gegevens op te halen, bij te werken, toe te voegen en te verwijderen in databases.",
  color: "bg-emerald-700",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
  sources: [
    {
      name: "SQL in 100 seconden",
      url: "https://www.youtube.com/watch?v=zsjvFFKOm3c&pp=ygUDc3Fs",
    },
    {
      name: "SQL Course op Youtube",
      url: "https://www.youtube.com/watch?v=HXV3zeQKqGY&pp=ygUDc3Fs",
    },
    {
      name: "Top 70 SQL queries",
      url: "https://bytescout.com/blog/20-important-sql-queries.html",
    },
  ],
  info:
    "<p>SQL is een krachtige taal die wordt gebruikt voor het beheren van relationele databases. Het stelt ontwikkelaars en databasebeheerders in staat om complexe query's uit te voeren om specifieke gegevens op te halen of te bewerken.</p>" +
    "<br>" +
    "<p>Met SQL kunnen databaseschema's worden gedefinieerd, tabellen worden aangemaakt en relaties tussen tabellen worden vastgesteld. Het ondersteunt ook transacties, waardoor meerdere bewerkingen als één geheel kunnen worden uitgevoerd.</p>" +
    "<p>Belangrijke concepten in SQL zijn onder andere SELECT-statements, JOINs, GROUP BY, en WHERE-clausules. Het begrijpen van deze concepten is essentieel voor het effectief werken met databases.</p>" +
    "<p>Er zijn verschillende databasebeheersystemen (DBMS) die SQL ondersteunen, waaronder MySQL, PostgreSQL, Microsoft SQL Server en Oracle Database.</p>" +
    "<p>Om SQL effectief te leren, is het raadzaam om te werken met praktische voorbeelden en oefeningen. Online documentatie en tutorials van het specifieke DBMS kunnen ook waardevolle bronnen zijn voor verdere verdieping.</p>",
};

export default sql; //dit verander je naar hetzelfde als de const
