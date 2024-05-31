import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const mysql: Category = {
  name: "MySQL",
  description:
    "MySQL is een krachtig relationeel databasebeheersysteem dat gebruikmaakt van SQL. Het is een populaire keuze voor het beheren van gegevens in verschillende soorten toepassingen, variërend van webtoepassingen tot bedrijfssystemen.",
  color: "bg-emerald-700",
  image: "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png",
  sources: [
    {
      name: "MySQL-documentatie",
      url: "https://dev.mysql.com/doc/",
    },
    {
      name: "MySQL Tutorial",
      url: "https://www.mysqltutorial.org/",
    },
    {
      name: "MySQL Workbench Handleiding",
      url: "https://dev.mysql.com/doc/workbench/en/",
    },
  ],
  info:
    "<p>MySQL is een open-source databasesysteem dat bekend staat om zijn snelheid, betrouwbaarheid en eenvoudige implementatie. Het maakt gebruik van SQL voor het beheren van databases, waardoor ontwikkelaars krachtige query's kunnen schrijven voor gegevensbeheer.</p>" +
    "<br>" +
    "<p>Met MySQL kunnen gebruikers complexe databaseschema's ontwerpen, tabellen maken en onderhouden, en geavanceerde query's uitvoeren. Het ondersteunt ook transacties en biedt verschillende opslagengines om aan verschillende behoeften te voldoen.</p>" +
    "<p>Belangrijke functies van MySQL zijn onder andere INDEXES, FOREIGN KEY-relaties, stored procedures en triggers. Deze functies dragen bij aan de optimalisatie en efficiëntie van databases.</p>" +
    "<p>MySQL Workbench is een grafische tool waarmee gebruikers databases kunnen ontwerpen, beheren en query's kunnen uitvoeren. Het biedt een intuïtieve interface voor databasebeheer.</p>" +
    "<p>Om MySQL effectief te gebruiken, is het raadzaam om vertrouwd te raken met de officiële MySQL-documentatie en tutorials. MySQL biedt ook een actieve gemeenschap waar gebruikers hulp en ondersteuning kunnen vinden.</p>",
};

export default mysql; //dit verander je naar hetzelfde als de const
