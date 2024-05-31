import type { Category } from "../../../../Types";

const fastapi: Category = {
  name: "FastAPI",
  description:
    "FastAPI is een modern, snel (high-performance), webframework voor het bouwen van API's met Python 3.7+ gebaseerd op standaarden zoals typehints.",
  color: "bg-emerald-700",
  image: "https://miro.medium.com/v2/resize:fit:1023/1*du7p50wS_fIsaC_lR18qsg.png",
  sources: [
    {
      name: "FastAPI Introductie",
      url: "https://www.youtube.com/watch?v=0RS9W8MtZe4&pp=ygUHZmFzdGFwaQ%3D%3D",
    },
    {
      name: "FastAPI Beginnerscursus",
      url: "https://www.youtube.com/watch?v=tLKKmouUams&pp=ygUHZmFzdGFwaQ%3D%3D",
    },
    {
      name: "FastAPI Officiele Tutorial",
      url: "https://fastapi.tiangolo.com/tutorial/first-steps/",
    },
  ],
  info:
    "<p>FastAPI is een modern, snel (high-performance), webframework voor het bouwen van API's met Python 3.7+ gebaseerd op standaarden zoals typehints. Het is ontworpen om zowel eenvoudig als krachtig te zijn en maakt gebruik van de nieuwste Python-functies om automatische documentatie en validatie van API's te bieden.</p>" +
    "<br>" +
    "<p>Met FastAPI kunnen ontwikkelaars snel en efficiënt API's bouwen met behulp van de standaard Python type hints voor het valideren van gegevens. Het framework is gebouwd bovenop Starlette en maakt gebruik van het asynchrone programmeermodel van Python voor optimale prestaties.</p>" +
    "<p>Belangrijke concepten bij het werken met FastAPI zijn het definiëren van routes met Python type hints, het gebruik van dependency injection voor geavanceerdere functionaliteit, en het begrijpen van asynchrone programmeerpatronen.</p>" +
    "<p>Raadpleeg de officiële FastAPI-documentatie voor gedetailleerde informatie over het gebruik van het framework en bekijk tutorials om je vaardigheden te ontwikkelen.</p>",
};

export default fastapi;
