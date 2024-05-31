# Keuzetool ID

TechKeuzeTool heeft als doel nieuwe studenten inzicht te bieden in de verschillende mogelijkheden die zij kunnen gebruiken voor hun project, zodat zij op een juiste manier aan de slag kunnen gaan.

## Install & Run

Run de volgende commands:

```sh
npm i

npm run dev
```

## Components

De components zijn te vinden in `src/lib/components`.

Deze sectie beschrijft de twee componenten van het systeem: Choice en Resolution. Choice bevat een knop waarin een technologie staat beschreven. Hier kan op worden gedrukt om verder te gaan in een technologie. Uiteindelijk, als de keuzes zijn gemaakt, wordt er een Resolution gegeven. Een Resolution is een pagina waarin een aangeraden technologie wordt beschreven met bronnen en informatie om de techniek te leren.

## Choice Component

Het `Choice`-component bevat een knop met beschrijvingen van verschillende technologieën. Gebruikers kunnen op de knoppen drukken om hun keuze te maken en verder te gaan met een specifieke technologie. Dit component biedt de gebruiker een overzicht van beschikbare technologieën om uit te kiezen.

## Resolution Component

Het `Resolution`-component is bedoeld om een aanbevolen technologie te presenteren. Het bevat informatie, bronnen en instructies om de technologie te leren. Zodra de gebruiker zijn keuzes heeft gemaakt in het `Choice`-component, wordt de bijbehorende `Resolution` weergegeven. Dit stelt de gebruiker in staat om dieper in te gaan op de geselecteerde technologie en de nodige hulpmiddelen en bronnen te verkennen.

## Data toevoegen

Om data toe te voegen aan de keuze tool moet je de `data.ts` file aanpassen. Daarin zit een `categories` variable vol met alle data die de applicatie gebruikt. De `type Category` en `type Source` legt uit wat de `categories` array verwacht hoe je de data moet toevoegen.
