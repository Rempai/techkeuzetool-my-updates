import type { Category } from "../../Types";
import * as image from ".";

export const Image: Array<Category> = [
  {
    name: "Image Generation",
    description:
      "Image generation bij AI omvat het gebruik van neurale netwerken, zoals GANs en VAEs, om realistische of creatieve afbeeldingen te genereren op basis van bestaande data.",
    color: "bg-red-600",
    children: [image.dalle.default, image.stable.default, image.midjourney.default],
  },
];
