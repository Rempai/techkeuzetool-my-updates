import type { Category } from "../../Types";

const r: Category = {
  name: "R",
  description: "R is een programmeertaal en software om statistische analyses uit te voeren.",
  image:
    "https://www.technotification.com/wp-content/uploads/2018/06/R-prograamming-for-data-science.jpg",
  color: "bg-orange-700",
  sources: [
    {
      name: "R Website",
      url: "https://www.r-project.org/",
    },
    {
      name: "R GitHub Repository",
      url: "https://github.com/wch/r-source",
    },
  ],
  info: "<h3>R in Data Science/Machine Learning</h3>\
            <p>R is een programmeertaal en omgeving ontworpen voor statistische computing en data-analyse. Enkele kenmerken zijn:</p>\
            <ul>\
              <li><strong>Statistische Analyse:</strong> R biedt een breed scala aan statistische en wiskundige functies voor data-analyse.</li>\
              <li><strong>Community Packages:</strong> De R-community heeft een uitgebreid ecosysteem van packages ontwikkeld voor verschillende statistische toepassingen.</li>\
              <li><strong>Data Visualisatie:</strong> R biedt krachtige tools zoals ggplot2 voor het maken van complexe en gedetailleerde data visualisaties.</li>\
            </ul>",
};

export default r;
