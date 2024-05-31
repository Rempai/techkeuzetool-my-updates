import type { Category } from "../../../Types";

const pandas: Category = {
  name: "Pandas",
  description:
    "Pandas is een open source Python library voor het analyseren van data. Het biedt een eenvoudige manier om data te importeren, te bewerken en te analyseren.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png",
  color: "bg-orange-700",
  sources: [
    {
      name: "Pandas Website",
      url: "https://pandas.pydata.org/",
    },
    {
      name: "Pandas GitHub Repository",
      url: "https://github.com/pandas-dev/pandas",
    },
  ],
  info: "<h3>Pandas in Data Science/Machine Learning</h3>\
            <p>Pandas is een krachtige library voor data-analyse in Python. Enkele kenmerken zijn:</p>\
            <ul>\
              <li><strong>Datastructuren:</strong> Pandas biedt datastructuren zoals Series en DataFrames voor het efficiënt organiseren van data.</li>\
              <li><strong>Data Manipulatie:</strong> Het ondersteunt diverse operaties voor het bewerken en manipuleren van data.</li>\
              <li><strong>CSV en Database Ondersteuning:</strong> Pandas maakt het gemakkelijk om data te importeren en exporteren naar verschillende formaten, waaronder CSV en databases.</li>\
            </ul>",
};

export default pandas;
