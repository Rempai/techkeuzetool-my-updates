import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const test: Category = {
  //we gebruiken dit om te controleren dat de child voldoet aan de data velden vanuit de Types.ts file
  name: "Test", //hier geef je een naam die je terugziet op de box
  description: "hier is een beschrijving", //Hier is de beschrijving voor in de box
  color: "bg-purple-700", //Hier kan je de kleur aanpassen die je op de box ziet
  image: "demo.png", //de link of path naar de image die je wilt laten zien
  sources: [
    {
      name: "test", //dit is de naam die je terug ziet op de info pagina bij de link
      url: "https://www.test.com", //dit is de link waar je naar toe gaat als je op de tekst klikt
    },
  ],
  info: "",
};

export default test; //dit verander je naar hetzelfde als de const
