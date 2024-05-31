import type { Category } from "../../../../Types";

const net: Category = {
  name: ".NET",
  description:
    ".NET is een veelzijdig softwareframework dat ontwikkelaars in staat stelt krachtige en platformonafhankelijke applicaties te bouwen. Het biedt een breed scala aan tools, programmeertalen en bibliotheken die de ontwikkeling vereenvoudigen en de productiviteit verhogen.",
  image: "https://barnes.nl/wp-content/uploads/2023/04/net_wallp.jpg",
  color: "bg-emerald-700",
  sources: [
    {
      name: ".NET Website",
      url: "https://learn.microsoft.com/en-us/dotnet/",
    },
    {
      name: "What is .NET? What's C# and F#? What's the .NET Ecosystem? .NET Core Explained, what can .NET build?",
      url: "https://youtu.be/bEfBfBQq7EE",
    },
  ],
  info: '<p class="mt-4">.NET is een softwareframework dat is ontwikkeld door Microsoft. Het biedt een platform voor het bouwen, implementeren en uitvoeren van verschillende soorten toepassingen, variërend van desktopapplicaties tot webapplicaties en zelfs mobiele apps. Het framework bestaat uit een reeks tools, programmeertalen en bibliotheken die ontwikkelaars helpen bij het creëren van krachtige en schaalbare software.</p><p class="mt-4">Een van de belangrijkste kenmerken van .NET is dat het een platformonafhankelijk framework is. Dit betekent dat ontwikkelaars applicaties kunnen schrijven met behulp van verschillende programmeertalen, zoals C#, VB.NET en F#, en deze applicaties kunnen vervolgens op verschillende platforms, zoals Windows, macOS en Linux, kunnen worden uitgevoerd. Dit wordt mogelijk gemaakt door de Common Language Runtime (CLR), een uitvoeringsomgeving binnen .NET die verantwoordelijk is voor het compileren en uitvoeren van de code.</p><p class="mt-4">Daarnaast biedt .NET een uitgebreide set van klassenbibliotheken, bekend als de .NET Framework Class Library, die een breed scala aan functionaliteiten en hulpmiddelen bieden voor het ontwikkelen van applicaties. Deze bibliotheken bevatten ondersteuning voor taken zoals bestandsbeheer, netwerkcommunicatie, gegevensbeheer, beveiliging en nog veel meer, waardoor ontwikkelaars hun applicaties efficiënt kunnen bouwen zonder vanaf nul te hoeven beginnen.</p><p class="mt-4">Met de opkomst van cloud computing heeft Microsoft ook .NET uitgebreid naar het Azure-platform, waardoor ontwikkelaars cloudgebaseerde applicaties kunnen bouwen en implementeren met behulp van .NET-technologieën.</p>',
};

export default net;
