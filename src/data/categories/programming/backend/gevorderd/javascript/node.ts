import type { Category } from "../../../../Types";

const node: Category = {
  name: "Node.js",
  description:
    "Node.js is een open-source, cross-platform runtime-omgeving voor het uitvoeren van JavaScript-code buiten een webbrowser.",
  color: "bg-emerald-700",
  image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  sources: [
    {
      name: "Node.js Beginners Guide",
      url: "https://www.youtube.com/watch?v=ENrzD9HAZK4&pp=ygUHbm9kZS5qcw%3D%3D",
    },
    {
      name: "Node.js API Refrence Documentatie",
      url: "https://nodejs.org/api/",
    },
    {
      name: "W3Schools Node.js Tutorial",
      url: "https://www.w3schools.com/nodejs/nodejs_get_started.asp",
    },
  ],
  info:
    "<p>Node.js is een open-source, cross-platform runtime-omgeving voor het uitvoeren van JavaScript-code buiten een webbrowser. Het stelt ontwikkelaars in staat om server-side JavaScript-toepassingen te bouwen en is bekend om zijn snelle uitvoering en schaalbaarheid.</p>" +
    "<br>" +
    "<p>Met Node.js kunnen ontwikkelaars efficiënt schaalbare netwerktoepassingen bouwen. Het is vooral populair voor het ontwikkelen van server-side webapplicaties en het bouwen van API's. In combinatie met frameworks zoals Express.js wordt het eenvoudig om snel webapplicaties te bouwen.</p>" +
    "<p>Het begrijpen van asynchrone JavaScript-programmering, het gebruik van npm (Node Package Manager) en het werken met modules zijn belangrijke aspecten bij het werken met Node.js. Daarnaast is kennis van het Express.js-framework nuttig voor het bouwen van webapplicaties.</p>" +
    "<p>Raadpleeg de officiële Node.js-documentatie voor gedetailleerde informatie over het gebruik van Node.js en kijk naar tutorials om je vaardigheden verder te ontwikkelen.</p>",
};

export default node;
