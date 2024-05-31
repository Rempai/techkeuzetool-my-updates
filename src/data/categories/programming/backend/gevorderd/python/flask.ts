import type { Category } from "../../../../Types";

const flask: Category = {
  name: "Flask",
  description:
    "Flask is een micro webframework geschreven in Python. Het is eenvoudig, flexibel en wordt vaak gebruikt voor het bouwen van webapplicaties en API's.",
  color: "bg-emerald-700",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1200px-Flask_logo.svg.png",
  sources: [
    {
      name: "Flask Beginners Tutorial",
      url: "https://www.youtube.com/watch?v=Z1RJmh_OqeA&pp=ygUFZmxhc2s%3D",
    },
    {
      name: "Maak een web-applicatie met Flask",
      url: "https://www.digitalocean.com/community/tutorials/how-to-make-a-web-application-using-flask-in-python-3",
    },
    {
      name: "Flask User's Guide",
      url: "https://flask.palletsprojects.com/en/3.0.x/",
    },
  ],
  info:
    "<p>Flask is een micro webframework geschreven in Python. Het is eenvoudig, flexibel en wordt vaak gebruikt voor het bouwen van webapplicaties en API's. Flask volgt het principe van 'keep it simple', waardoor ontwikkelaars snel en efficiënt webapplicaties kunnen ontwikkelen.</p>" +
    "<br>" +
    "<p>Met Flask kunnen ontwikkelaars routes definiëren, templates gebruiken voor het renderen van HTML-pagina's, en eenvoudig integreren met databases. Het is ideaal voor zowel beginners als gevorderde ontwikkelaars vanwege zijn eenvoudige syntax en krachtige mogelijkheden.</p>" +
    "<p>Belangrijke concepten bij het werken met Flask zijn routes, templates, en het gebruik van extensies voor extra functionaliteiten. Flask wordt vaak gebruikt voor zowel het bouwen van volledige webapplicaties als het maken van RESTful API's.</p>" +
    "<p>Raadpleeg de officiële Flask-documentatie voor gedetailleerde informatie over het gebruik van het framework en bekijk tutorials om je vaardigheden te ontwikkelen.</p>",
};

export default flask;
