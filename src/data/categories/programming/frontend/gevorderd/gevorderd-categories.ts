import type { Category } from "../../../Types";
import * as gevordend from ".";

export const gevorderd: Array<Category> = [
  {
    name: "Gevorderd",
    description: "",
    color: "bg-teal-700",
    children: [
      gevordend.react.default,
      gevordend.vue.default,
      gevordend.svelte.default,
      gevordend.next.default,
      gevordend.nuxt.default,
      gevordend.sveltekit.default,
    ],
  },
];
