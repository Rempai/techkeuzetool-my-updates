import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const stable: Category = {
  name: "Stable Diffusion",
  description:
    "Stable Diffusion is een open-source tool die gebruikt kan worden om foto's te genereren en aan te passen.",
  color: "bg-purple-700",
  image: "https://assets.stablediffusion.fr/sd.png",
  sources: [
    {
      name: "Stable Diffusion GitHub Repository",
      url: "https://github.com/CompVis/stable-diffusion",
    },
    {
      name: "Stable Diffusion 2.1 Online Demo",
      url: "https://huggingface.co/spaces/stabilityai/stable-diffusion",
    },
  ],
  info:
    "<p>Stable Diffusion is een open-source tool die gebruikt kan worden om foto's te genereren en aan te passen. In tegenstelling tot DALL-E 2 is het open-source. Hierdoor is het niet alleen mogelijk om via het internet foto's te genereren, maar je het ook zelf kan runnen.</p>" +
    "<br>" +
    "<p>Bij stable diffusion kan je een prompt en een negatieve prompt invullen. In de normale prompt kan je invullen wat je wilt zien in de afbeelding, en in de negatieve prompt kan je dingen zetten die je niet wilt hebben. Een voorbeeld die vaak als negative prompt wordt gebruikt is low quality.</p>",
};

export default stable; //dit verander je naar hetzelfde als de const
