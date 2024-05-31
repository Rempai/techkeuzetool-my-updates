import type { Category } from "../../../Types";

const svelte: Category = {
  name: "Svelte",
  description:
    "Svelte is een front-end javascript framework voor het maken van interactieve webpagina’s. Svelte applicaties zijn component based en maken gebruik van een DOM net zoals React en Vue. Svelte heeft echter wel een aantal unieke features waardoor het nogal verschilt van bestaande frameworks. ",
  color: "bg-emerald-700",
  image:
    "https://res.cloudinary.com/practicaldev/image/fetch/s--78sV_n0e--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/un1vp3qoyd13gznq1pvt.png",
  sources: [
    {
      name: "Rich Harris, Rethinking reactivity",
      url: "https://youtu.be/AdNJ3fydeao",
    },
    {
      name: "Svelte in 100 Seconds ",
      url: "https://youtu.be/rv3Yq-B8qp4",
    },
    {
      name: "Svelte Crash Course door Traversy Media",
      url: "https://youtu.be/3TVy6GdtNuQ",
    },
  ],
  info: "<p>Svelte is een open-source, front-end javascript framework voor het maken van interactieve webpagina’s. Svelte applicaties zijn component based en maken gebruik van een DOM net, zoals React en Vue. Svelte heeft echter wel een aantal unieke features waardoor het nogal verschilt van bestaande frameworks. Svelte is niet zomaar erg populair onder de developers. Als je kijkt naar de jaarlijkse stackoverflow survey zie je dat Svelte ook een van de meest geliefde web frameworks is op dit moment.</p><p class='mt-6'>Één van de grootste pluspunten aan Svelte is dat je als developer minder code hoeft te schrijven. Dit zorgt ervoor dat een developer  sneller webpagina’s kan maken en er minder kans op bugs zijn, omdat er minder code is geschreven.</p><p class='mt-6'>Eerder werd aangegeven dat Svelte een framework is, maar technisch gezien is Svelte een compiler. Dit is ook gelijk het grootste verschil met de andere populaire front-end technologieën. Waar React en Vue het meeste werk op de webpagina zelf uitvoeren in de browser, verplaatst Svelte dit werk naar de compile stap van de applicatie. Hierdoor heeft het een aanzienlijke performance boost in vergelijking met  andere frameworks. Omdat de code in native Javascript wordt gecompileerd, stelt het Svelte instaat om gebruik te maken van een echte DOM, in plaats van een virtuele DOM. In de virtuele DOM worden updates aan de pagina’s eigenlijk vrij omslachtig verwerkt. Op de achtergrond wordt bij een state verandering de huidige pagina vergeleken met de vorige versie van de pagina (snapshot) en aan de hand hiervan wordt een nieuwe pagina gemaakt waar de veranderingen weer in zijn gegeven. Bij een echte DOM wordt een state verandering in de specifieke node (HTML element) aangepast zonder het omslachtige vergelijken van de snapshots. Dit maakt Svelte sneller dan populaire frameworks zoals React.js en Vue.js.</p><p class='mt-6'>Omdat de code van Svelte wordt gecompileerd naar native Javascript is Svelte instaat om volledige reactive te zijn. Dit houdt dus in dat een bestaande weergegeven variabele automatisch wordt bijgewerkt op een pagina, wanneer deze variabele op de pagina, zoals een cijfer in het eerdere counter voorbeed, wordt geüpdatet. Hier is dus geen State logica voor nodig, zoals bij React.js en Vue.js wel ziet. Dit maakt het een stuk makkelijker om met Svelte te werken en hierdoor vraagt Svelte ook een veel kleinere learning curve dan andere web frameworks.</p>",
};

export default svelte;
