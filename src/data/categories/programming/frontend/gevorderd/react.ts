import type { Category } from "../../../Types";

const react: Category = {
  name: "React",
  description:
    "React is een krachtige JavaScript-bibliotheek die ontwikkelaars in staat stelt om op een gestructureerde en efficiënte manier gebruikersinterfaces te bouwen. Door het gebruik van herbruikbare componenten en de virtual DOM biedt React een intuïtieve en snelle manier om interactieve webapplicaties te ontwikkelen.",
  color: "bg-blue-500",
  image: "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
  sources: [
    {
      name: "React JS Explained In 10 Minutes",
      url: "https://youtu.be/s2skans2dP4",
    },
    {
      name: "Learn React In 30 Minutes",
      url: "https://youtu.be/hQAHSlTtcmY",
    },
    {
      name: "Why & When I Use React JS",
      url: "https://youtu.be/yAbnoYfV99g",
    },
  ],
  info: '<p class="mt-6">React is een populaire JavaScript-bibliotheek voor het bouwen van gebruikersinterfaces voor webapplicaties. Het is ontwikkeld door Facebook en wordt ook onderhouden door een community van ontwikkelaars. React streeft ernaar om het bouwen van complexe UI-componenten eenvoudiger te maken door een declaratieve benadering te bieden.</p><p class="mt-6">Een van de belangrijkste kenmerken van React is de mogelijkheid om herbruikbare componenten te maken. In plaats van een webapplicatie als een grote monolithische structuur te bouwen, kan React de interface opdelen in kleine, zelfstandige componenten. Deze componenten kunnen afzonderlijk worden ontwikkeld, getest en opnieuw gebruikt in verschillende delen van de applicatie.</p><p class="mt-6">React maakt gebruik van een virtuele DOM (Document Object Model) om efficiënte updates van de gebruikersinterface mogelijk te maken. In plaats van rechtstreeks op de DOM te werken, maakt React een virtuele representatie van de DOM bij en houdt het bij welke elementen moeten worden bijgewerkt. Hierdoor kan React alleen de nodige wijzigingen aanbrengen in plaats van de hele pagina opnieuw te renderen, waardoor de prestaties worden geoptimaliseerd.</p><p class="mt-6">React kan worden gebruikt in combinatie met andere bibliotheken of frameworks en is onafhankelijk van de back-end-technologie. Het wordt vaak gebruikt in combinatie met tools zoals webpack en Babel om moderne JavaScript-functies en modules te ondersteunen.</p>',
};

export default react;
