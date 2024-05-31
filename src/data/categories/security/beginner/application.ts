import type { Category } from "../../Types";

const application: Category = {
  name: "Application Security",
  description:
    "Het toepassen van beveiligingsmaatregelen op applicatieniveau om kwetsbaarheden en bedreigingen te voorkomen.",
  color: "bg-lime-500",
  sources: [
    {
      name: "Applicatiebeveiliging voor beginners",
      url: "https://voorbeeld-link-naar-applicatiebeveiliging-voor-beginners",
    },
    {
      name: "Inleiding tot Applicatiebeveiliging",
      url: "https://voorbeeld-link-naar-inleiding-applicatiebeveiliging",
    },
  ],
  info: "<h3>Application Security voor Beginners</h3>\
            <p>Application Security, ook wel bekend als AppSec, richt zich op het beveiligen van softwaretoepassingen tegen bedreigingen en kwetsbaarheden. Voor beginners in Application Security zijn hier enkele kernbegrippen om mee te beginnen:</p>\
            <ul>\
              <li><strong>OWASP Top Tien:</strong> Vertrouwd raken met de meest voorkomende beveiligingsrisico's in softwareontwikkeling volgens de OWASP Top Tien.</li>\
              <li><strong>Beveiligingsprincipes:</strong> Begrijp basisbeveiligingsprincipes, zoals authenticatie, autorisatie en gegevensversleuteling.</li>\
              <li><strong>Veilige Ontwikkelingspraktijken:</strong> Leer veilige ontwikkelingspraktijken om kwetsbaarheden in de ontwikkelingsfase te minimaliseren.</li>\
            </ul>",
};

export default application;
