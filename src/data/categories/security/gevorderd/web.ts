import type { Category } from "../../Types";

const web: Category = {
  name: "Web Security",
  description: "Geavanceerde technieken en strategieën voor webbeveiliging.",
  color: "bg-orange-500",
  sources: [
    {
      name: "Webbeveiliging Basics: Wat je moet weten",
      url: "https://www.youtube.com/watch?v=opRMrEfAIiI",
    },
    {
      name: "Hoe SSL werkt - De werking van HTTPS uitgelegd",
      url: "https://www.youtube.com/watch?v=iQsKdtjwtYI",
    },
    {
      name: "Web Application Security: Inbreken en Verdedigen",
      url: "https://www.youtube.com/watch?v=3K9N_O8ZzGk",
    },
  ],
  info: "<p>Webbeveiliging, ook bekend als cyberbeveiliging, is een essentieel onderdeel van het ontwikkelen en onderhouden van websites en webapplicaties. Het houdt zich bezig met de bescherming van websites en webapplicaties tegen verschillende beveiligingsrisico's en aanvallen, zoals SQL-injectie, cross-site scripting (XSS), en DDoS-aanvallen. Als je een beginner bent, is het belangrijk om te beginnen met de basisprincipes van webbeveiliging. De video 'Webbeveiliging Basics: Wat je moet weten' is een geweldige plek om te beginnen. Voor degenen die geïnteresseerd zijn in het begrijpen van de beveiliging van gegevens tijdens het transport, is 'Hoe SSL werkt - De werking van HTTPS uitgelegd' een must-watch. Gevorderde studenten die geïnteresseerd zijn in het leren van penetratietesten en verdedigingstechnieken voor webapplicaties moeten zeker kijken naar 'Web Application Security: Inbreken en Verdedigen'. Deze video's zullen je helpen om een solide basis te leggen en je kennis van webbeveiliging te verdiepen.</p>",
};

export default web;
