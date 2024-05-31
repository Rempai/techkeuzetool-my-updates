import type { Category } from "../../../Types";

const numpy: Category = {
  name: "Numpy",
  description:
    "Numpy is een open source Python library voor het werken met arrays. Het biedt een eenvoudige manier om arrays te maken, te bewerken en te analyseren.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/NumPy_logo_2020.svg/1200px-NumPy_logo_2020.svg.png",
  color: "bg-orange-700",
  sources: [
    {
      name: "Numpy Website",
      url: "https://numpy.org/",
    },
    {
      name: "Numpy GitHub Repository",
      url: "https://github.com/numpy/numpy",
    },
  ],
  info: "<h3>Numpy in Data Science/Machine Learning</h3>\
            <p>Numpy is essentieel voor wetenschappelijke computing in Python. Het biedt:</p>\
            <ul>\
              <li><strong>Array Operaties:</strong> Numpy maakt het eenvoudig om krachtige operaties uit te voeren op arrays, zoals wiskundige bewerkingen en lineaire algebra.</li>\
              <li><strong>Efficiënte Datarepresentatie:</strong> Het maakt gebruik van efficiënte datastructuren voor het opslaan van grote hoeveelheden data.</li>\
              <li><strong>Broadcasting:</strong> Numpy ondersteunt broadcasting, waardoor element-wise operaties mogelijk zijn tussen arrays van verschillende vormen.</li>\
            </ul>",
};

export default numpy;
