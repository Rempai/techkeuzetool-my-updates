import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const looka: Category = {
  name: "Looka",
  description: "Looka is een tool om logo's voor jou bedrijf of product te genereren",
  color: "bg-purple-700",
  image: "https://aiexplorer.io/wp-content/uploads/2023/02/logo-looka-min-1.png",
  sources: [
    {
      name: "De website van Looka",
      url: "https://looka.com/",
    },
  ],
  info:
    "<p>Looka is een tool om logo's voor jou bedrijf te genereren. Je kan veel verschillende factoren opgeven, natuurlijk heb je de naam van je bedrijf, maar je kan ook een keuze maken in het soort bedrijf, logo's die je mooi vind, en kleuren om het volledig te personaliseren.</p>" +
    "<br>" +
    "<p>Het maken van logo's kan je gelijk gratis via de website doen, maar om de logo's aan te passen en/of te gebruiken, moet je een account aanmaken.</p>",
};

export default looka; //dit verander je naar hetzelfde als de const
