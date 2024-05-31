import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const fontjoy: Category = {
  name: "Fontjoy",
  description:
    "Fontjoy is een tool die helpt met het selecteren van verschillende fonts die goed bij elkaar passen.",
  color: "bg-purple-700",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUD1ItgKz6HrHp7en0zUrCaWntvFZbRqvUfesWjjVmg&s",
  sources: [
    {
      name: "De website van Fontjoy",
      url: "https://fontjoy.com/",
    },
  ],
  info:
    "<p>Fontjoy is een tool die helpt met het selecteren van verschillende fonts die goed bij elkaar passen. Je kan ook nog input geven of je fonts wilt die veel op elkaar lijken, of juist een verschillend contrast hebben.</p>" +
    "<br>" +
    "<p>Het doel van het koppelen van fonts is het selecteren van fonts die een overkoepelend thema delen, en toch een aangenaam contrast hebben.</p>",
};

export default fontjoy; //dit verander je naar hetzelfde als de const
