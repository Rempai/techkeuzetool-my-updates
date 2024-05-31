import type { Category } from "../../../Types";

const tensorflow: Category = {
  name: "TensorFlow",
  description:
    "TensorFlow kan worden gebruikt voor het bouwen, trainen en implementeren van diverse machine learning modellen, waaronder neurale netwerken.",
  image: "https://i.ytimg.com/vi/yjprpOoH5c8/maxresdefault.jpg",
  color: "bg-orange-700",
  sources: [
    {
      name: "TensorFlow Website",
      url: "https://www.tensorflow.org/",
    },
    {
      name: "TensorFlow GitHub Repository",
      url: "https://github.com/tensorflow/tensorflow",
    },
  ],
  info: "<h3>TensorFlow in Data Science/Machine Learning</h3>\
            <p>TensorFlow is een krachtige open source machine learning library ontwikkeld door Google. Het wordt veel gebruikt voor diverse machine learning taken, waaronder:</p>\
            <ul>\
              <li><strong>Bouwen van Neurale Netwerken:</strong> TensorFlow biedt een flexibele omgeving voor het construeren van complexe neurale netwerken.</li>\
              <li><strong>Model Training:</strong> Het stelt ontwikkelaars in staat modellen te trainen op grote datasets met behulp van geavanceerde optimalisatie-algoritmen.</li>\
              <li><strong>Implementatie:</strong> TensorFlow-modellen kunnen gemakkelijk worden geïmplementeerd in verschillende omgevingen, waaronder mobiele apparaten en servers.</li>\
            </ul>",
};

export default tensorflow;
