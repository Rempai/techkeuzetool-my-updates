import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const dalle: Category = {
  name: "DALL-E 2",
  description:
    "DALL-E 2 is een tool van OpenAI die gebruikt kan worden om foto's te genereren. Dit is misschien wel de makkelijkste manier om hiermee te beginnen.",
  color: "bg-purple-700",
  image: "https://centralized.ai/content/images/2022/12/DALL-E.png",
  sources: [
    {
      name: "DALL-E 2 Website",
      url: "https://openai.com/dall-e-2",
    },
  ],
  info:
    "<p>DALL-E 2 is een tool van OpenAI die gebruikt kan worden om foto's te genereren. Dit is misschien wel de makkelijkste manier om hiermee te beginnen. Je kan simpelgezegd schijven wat je gegenereerd wil hebben, en er worden in een korte tijd 4 foto's gegenereerd.</p>" +
    "<br>" +
    "<p>DALL-E 2 kan goed gebruikt worden om niet alleen realistische foto's, maar ook logo's te genereren. Ook is het heel makkelijk om te experimenteren met prompts om uit te komen op jou gewenste eindresultaat. Het enige nadeel is dat de prompts strict in het engels moeten zijn, en andere talen niet werken.</p>" +
    "<p>DALL-E 2 werkt met een credits systeem, zo betaal je voor elke prompt credits. Je krijgt elke maand een handvol credits, maar je hebt ook de optie om credits te kopen.</p>",
};

export default dalle; //dit verander je naar hetzelfde als de const
