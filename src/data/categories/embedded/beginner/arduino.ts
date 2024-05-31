import type { Category } from "../../Types";

const Arduino: Category = {
  name: "Arduino",
  description:
    "Arduino is een open-source microcontroller platform voor het maken van interactieve elektronische projecten.",
  color: "bg-cyan-600",
  image: "https://duckduckgo.com/i/55df9b68.png",
  sources: [
    {
      name: "Arduino Tutorial voor Beginner",
      url: "https://www.youtube.com/watch?v=3VRBsXZkO0w",
    },
    {
      name: "Arduino Crash Course",
      url: "https://www.youtube.com/watch?v=09zfRaLEasY",
    },
    {
      name: "Arduino Projecten voor Beginners",
      url: "https://www.youtube.com/watch?v=U2uH-jrsSxs",
    },
  ],
  info: "<p>Als je nieuw bent in de wereld van elektronica en programmeren, dan is Arduino een geweldig startpunt. Laat me je een korte introductie geven. Arduino is eigenlijk een open-source elektronica platform. Met 'open-source' bedoel ik dat de ontwerpen van de hardware vrij beschikbaar zijn, en de software is gratis te gebruiken en aan te passen. Het is gebaseerd op gebruiksvriendelijke hardware en software, wat betekent dat het super toegankelijk is, zelfs als je geen techneut bent.<br> De hardware bestaat uit een printplaat met een microcontroller (dat is een soort mini-computer) en een aantal aansluitingen waar je andere elektronische componenten aan kunt koppelen, zoals sensoren, LED's, en motoren. De software is een programmeeromgeving waar je code kunt schrijven om de hardware aan te sturen. Je schrijft de code op je computer, en dan upload je het naar de Arduino. <br>Wat cool is aan Arduino, is dat je er allerlei creatieve projecten mee kunt maken. Van simpele dingen zoals het laten knipperen van een LED-lampje, tot complexere projecten zoals robots, weerstations, en zelfs videogames!</p>",
};

export default Arduino;
