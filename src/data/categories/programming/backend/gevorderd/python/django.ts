import type { Category } from "../../../../Types";

const django: Category = {
  name: "Django",
  description:
    "Django is een high-level web framework geschreven in Python dat snel en efficiënt webapplicaties ontwikkelen mogelijk maakt.",
  color: "bg-emerald-700",
  image: "https://www.fullstackpython.com/img/logos/django.png",
  sources: [
    {
      name: "Wat is Django",
      url: "https://www.youtube.com/watch?v=0sMtoedWaf0&pp=ygUNZGphbmdvIHB5dGhvbg%3D%3D",
    },
    {
      name: "Leer Django in 20 minuten",
      url: "https://www.youtube.com/watch?v=nGIg40xs9e4&pp=ygUNZGphbmdvIHB5dGhvbg%3D%3D",
    },
    {
      name: "W3Schools Django Tutorial",
      url: "https://www.w3schools.com/django/",
    },
  ],
  info:
    "<p>Django is een high-level web framework geschreven in Python dat snel en efficiënt webapplicaties ontwikkelen mogelijk maakt. Het volgt het 'Don't Repeat Yourself' (DRY) principe en streeft naar een clean en pragmatische codebase.</p>" +
    "<br>" +
    "<p>Met Django kun je snel databases modelleren, views definiëren, URL-routes instellen en formulieren maken. Het bevat ook een krachtig beheerderspaneel waarmee je de inhoud van je applicatie kunt beheren.</p>" +
    "<p>Django REST Framework breidt Django uit om de ontwikkeling van API's te vergemakkelijken, waardoor je gemakkelijk RESTful API's kunt bouwen met Django.</p>" +
    "<p>Een basiskennis van Python is handig bij het werken met Django, en het begrijpen van het MVC (Model-View-Controller) ontwerppatroon kan ook nuttig zijn. De Django-documentatie is een uitstekende bron om te leren hoe je het framework moet gebruiken.</p>",
};

export default django;
