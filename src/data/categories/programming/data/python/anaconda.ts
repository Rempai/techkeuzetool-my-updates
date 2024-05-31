import type { Category } from "../../../Types";

const anaconda: Category = {
  name: "Anaconda",
  description:
    "Anaconda is een gratis en open source distributie van Python en R voor data science en machine learning. Het bevat een reeks van populaire data science packages.",
  image:
    "https://blog.hubspot.com/hs-fs/hubfs/anaconda_2.webp?width=400&height=210&name=anaconda_2.webp",
  color: "bg-orange-700",
  sources: [
    {
      name: "Anaconda Website",
      url: "https://www.anaconda.com/",
    },
    {
      name: "Anaconda GitHub Repository",
      url: "https://github.com/ContinuumIO/anaconda",
    },
  ],
  info: "<h3>Anaconda in Data Science/Machine Learning</h3>\
            <p>Anaconda is een alles-in-één platform dat is ontworpen voor data science en machine learning. Het biedt:</p>\
            <ul>\
              <li><strong>Package Management:</strong> Anaconda maakt het gemakkelijk om packages te beheren en te installeren voor data science en machine learning.</li>\
              <li><strong>Virtual Environments:</strong> Het ondersteunt het gebruik van geïsoleerde virtuele omgevingen voor projecten.</li>\
              <li><strong>Populaire Packages:</strong> Anaconda wordt geleverd met populaire packages voor data science, waaronder NumPy, Pandas, en Jupyter Notebooks.</li>\
            </ul>",
};

export default anaconda;
