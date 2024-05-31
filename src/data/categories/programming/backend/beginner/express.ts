import type { Category } from "../../../Types";

const express: Category = {
  name: "Express",
  description:
    "Express is een minimalistisch, flexibel en robuust webapplicatieframework voor Node.js. Het wordt vaak gebruikt om serverzijde-applicaties en API's te bouwen.",
  color: "bg-emerald-700",
  image: "https://expressjs.com/images/express-facebook-share.png",
  sources: [
    {
      name: "Wat is Express",
      url: "https://www.youtube.com/watch?v=0QRFOsrBtXw&pp=ygUKZXhwcmVzcyBqcw%3D%3D",
    },
    {
      name: "Leer Express in 35 minuten",
      url: "https://www.youtube.com/watch?v=SccSCuHhOw0&ab_channel=WebDevSimplified",
    },
    {
      name: "Express Hello World voorbeeld",
      url: "https://expressjs.com/en/starter/hello-world.html",
    },
  ],
  info:
    "<p>Express is een minimalistisch, flexibel en robuust webapplicatieframework voor Node.js. Het wordt vaak gebruikt om serverzijde-applicaties en API's te bouwen. Express maakt het eenvoudig om routes te definiëren, middleware toe te passen en HTTP-verzoeken te beheren.</p>" +
    "<br>" +
    "<p>Met Express kun je snel RESTful API's maken en endpoints definiëren voor het verwerken van HTTP-verzoeken. Het biedt ook een scala aan middleware die je kunt gebruiken om functionaliteiten toe te voegen, zoals authenticatie, logging en meer.</p>" +
    "<p>Het begrijpen van het gebruik van routes, middleware, en het werken met aanvragen en reacties zijn kernaspecten van het werken met Express. Daarnaast is kennis van Node.js van groot belang, omdat Express bovenop Node.js wordt gebouwd.</p>" +
    "<p>De Express-documentatie is een waardevolle bron om te leren hoe je het framework moet gebruiken. Het helpt je bij het begrijpen van de verschillende functies, methoden en configuratiemogelijkheden die Express te bieden heeft.</p>",
};

export default express;
