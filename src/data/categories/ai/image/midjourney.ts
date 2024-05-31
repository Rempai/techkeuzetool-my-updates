import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const midjourney: Category = {
  name: "Midjourney",
  description: "Midjourney is tool via discord die gebruikt kan worden om foto's te genereren.",
  color: "bg-purple-700",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Midjourney_Emblem.svg",
  sources: [
    {
      name: "De site van Midjourney",
      url: "https://www.midjourney.com/",
    },
    {
      name: "De discord van Midjourney",
      url: "https://discord.gg/midjourney",
    },
  ],
  info:
    "<p>Midjourney is tool via discord die gebruikt kan worden om foto's te genereren. In tegenstelling tot de andere tools werkt het via een discord kanaal is de server van Midjourney. Net zoals bij DALL-E 2 worden er 4 foto's gegenereerd per prompt die je opgeeft.</p>" +
    "<br>" +
    "<p>Het enige wat je nodig hebt om Midjourney te gebruiken is een geverifieerd discord account. In de server van Midjourney krijg je 25 querries. Dit is om je een proefje te geven van wat Midjourney allemaal kan. Als je de tool verder wilt gebruiken moet je maandelijks betalen.</p>",
};

export default midjourney; //dit verander je naar hetzelfde als de const
