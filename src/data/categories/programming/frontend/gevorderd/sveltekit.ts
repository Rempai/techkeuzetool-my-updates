import type { Category } from "../../../Types";

const sveltekit: Category = {
  name: "SvelteKit",
  description:
    "SvelteKit is een framework voor het bouwen van webapplicaties met Svelte. Het biedt een gestroomlijnde ontwikkelervaring met ingebouwde ondersteuning voor routing, server-side rendering en andere handige functies. Met SvelteKit kunnen ontwikkelaars snel en efficiënt interactieve webapplicaties bouwen met de kracht van Svelte.",
  color: "bg-red-500",
  image:
    "https://user-images.githubusercontent.com/11630812/114088279-7cd7be80-98d2-11eb-883c-66c3bf48f293.png",
  sources: [
    {
      name: "Sveltekit Website",
      url: "https://kit.svelte.dev/",
    },
    {
      name: "Sveltekit full Tutorial",
      url: "https://youtube.com/watch?v=9OlLxkaeVvw&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=1",
    },
  ],
  info: "<p>SvelteKit is een framework voor het bouwen van webapplicaties met Svelte. Het biedt een gestroomlijnde ontwikkelervaring met ingebouwde ondersteuning voor routing, server-side rendering en andere handige functies. Met SvelteKit kunnen ontwikkelaars snel en efficiënt interactieve webapplicaties bouwen met de kracht van Svelte.</p><p class='mt-6'>SvelteKit bouwt voort op de concepten van Svelte, waarbij de code van componenten tijdens de buildfase wordt omgezet naar efficiënte JavaScript-code. Dit resulteert in snelle en lichtgewicht webapplicaties die direct in de browser worden geladen. Daarnaast biedt SvelteKit ingebouwde ondersteuning voor server-side rendering, waardoor de initiële laadtijd van de pagina wordt geoptimaliseerd en de inhoud direct beschikbaar is voor zoekmachines.</p><p class='mt-6'>Het routing-systeem van SvelteKit maakt het gemakkelijk om navigatie tussen pagina's te implementeren en dynamische routes te definiëren. Het biedt ook ondersteuning voor preloading en prefetching, waardoor de gebruikerservaring wordt verbeterd door snelle paginatransities en vooraf geladen bronnen.</p>",
};

export default sveltekit;
