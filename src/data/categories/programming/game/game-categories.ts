import type { Category } from "../../Types";
import * as Game from ".";

export const gameCategories: Array<Category> = [
  {
    name: "Game Development",
    description: "Spellen ontwikkelen",
    color: "bg-pink-700",
    icon: "game-controller-outline",
    iconColor: "text-pink-800",
    children: [Game.unity.default, Game.unreal.default, Game.godot.default],
  },
];
