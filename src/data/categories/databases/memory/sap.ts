import type { Category } from "../../Types"; //Hier doe je de path naar de Types.ts file definieren. hier voeg je meestal ../ toe of haal je er eentje van af

const sap: Category = {
  name: "SAP HANA",
  description:
    "SAP HANA is een in-memory relationele database die is ontworpen voor snelle verwerking van grote hoeveelheden gegevens en geavanceerde analyses. Het wordt veel gebruikt in bedrijfsomgevingen voor real-time besluitvorming.",
  image:
    "https://www.vision33.com/hs-fs/hubfs/ARedesign%202018/SAP%20Business%20One%20Pages/SAP-HANA-logo_160330_154207.png?width=600&name=SAP-HANA-logo_160330_154207.png",
  color: "bg-purple-700",
  sources: [
    {
      name: "SAP HANA Documentation",
      url: "https://help.sap.com/viewer/product/SAP_HANA_platform/2.0.05/en-US",
    },
  ],
  info: "<h3>SAP HANA in Database Management</h3>\
            <p>SAP HANA is een geavanceerde in-memory relationele database die is geoptimaliseerd voor snelle verwerking van grote hoeveelheden gegevens en geavanceerde analyses. Enkele opmerkelijke kenmerken zijn:</p>\
            <ul>\
              <li><strong>In-Memory Verwerking:</strong> SAP HANA voert analyses en transacties uit in het RAM-geheugen, waardoor het extreem snelle verwerking biedt.</li>\
              <li><strong>Geavanceerde Analysemogelijkheden:</strong> Het ondersteunt geavanceerde analysetools en mogelijkheden voor voorspellende analyse.</li>\
            </ul><br>\
            <h4>Voordelen van SAP HANA:</h4>\
            <ul>\
              <li>✅ Uitzonderlijke prestaties door in-memory verwerking van gegevens.</li>\
              <li>✅ Ondersteuning voor geavanceerde analyses en voorspellende modellering.</li>\
              <li>✅ Geïntegreerde ondersteuning voor real-time besluitvorming in bedrijfsomgevingen.</li>\
            </ul><br>\
            <h4>Uitdagingen van SAP HANA:</h4>\
            <ul>\
              <li>❌ Kan een complexe implementatie en configuratie vereisen.</li>\
              <li>❌ Mogelijk hogere kosten in vergelijking met sommige andere databases.</li>\
            </ul><br>\
            <h4>Veelgebruikte Toepassingen:</h4>\
            <p>SAP HANA wordt veel gebruikt in bedrijfsomgevingen voor real-time analyse, rapportage en besluitvorming. Het is geschikt voor uiteenlopende sectoren zoals financiën, logistiek en gezondheidszorg.</p>",
};

export default sap; //dit verander je naar hetzelfde als de const
