import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const chatgpt: Category = {
  name: "ChatGPT",
  description:
    "ChatGPT is een tool van OpenAI om tekst te genereren. Het is de meest populaire keuze op dit moment.",
  color: "bg-purple-700",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png",
  sources: [
    {
      name: "De website van ChatGPT",
      url: "https://chat.openai.com/",
    },
  ],
  info:
    "<p>ChatGPT is een tool van OpenAI om tekst te genereren. Het is de meest populaire keuze op dit moment. Er is dus een hele grote kans dat jij ook gebruik maakt van ChatGPT.</p>" +
    "<br>" +
    "<p>ChatGPT kan heel veel dingen, je kan het laten helpen met het genereren van code, werkstukken, samenvatingen en nog heel veel meer. Het werkt met een dataset die gaat tot januari 2022, dit betekent dat het niks weet van dingen die na die datum zijn uitgekomen. Er is ook een kans dat ChatGPT onjuiste informatie verteld, maar dit staat aangegeven.</p>" +
    "<p>Als je toegang wilt tot het vernieuwde model van ChatGPT, namelijk GPT 4, kan dit tegen een maandelijkse betaling van 20 euro. Als je heel erg veel gebruikt maakt van deze tool en er nog meer uit wilt halen is dit misschien de juiste keuze voor jou, of jou bedrijf.</p>",
};

export default chatgpt; //dit verander je naar hetzelfde als de const
