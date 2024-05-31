import type { Category } from "../Types";
import { Design } from "./design/design-categories";
import { Image } from "./image/image-categories";
import { Text } from "./text/text-categories";

export const aiCategories: Array<Category> = [
  {
    name: "AI Tools",
    description:
      "AI-tools zijn toepassingen die kunstmatige intelligentie gebruiken om specifieke problemen op te lossen.",
    color: "bg-purple-500",
    icon: "git-network-outline",
    iconColor: "text-purple-800",
    children: [...Image, ...Text, ...Design],
  },
];
