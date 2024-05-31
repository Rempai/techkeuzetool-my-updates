import type { Category } from "../../Types";
import * as text from ".";

export const Text: Array<Category> = [
  {
    name: "Text Generation",
    description:
      "Text generation bij AI houdt in dat kunstmatige intelligentie-systemen, zoals transformermodellen, worden gebruikt om automatisch tekst te creëren op basis van voorafgaande training met bestaande tekstdata.",
    color: "bg-blue-400",
    children: [text.chatgpt.default],
  },
];
