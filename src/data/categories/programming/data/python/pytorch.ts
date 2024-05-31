import type { Category } from "../../../Types";

const pytorch: Category = {
  name: "PyTorch",
  description:
    "PyTorch is een open source machine learning library voor Python, gebaseerd op Torch, een C++ library voor machine learning.",
  image: "https://miro.medium.com/v2/resize:fit:1400/1*N3uX6Yd6YeVCc4hxcnprAg.png",
  color: "bg-orange-700",
  sources: [
    {
      name: "PyTorch Website",
      url: "https://pytorch.org/",
    },
    {
      name: "PyTorch GitHub Repository",
      url: "https://github.com/pytorch/pytorch",
    },
  ],
  info: "<h3>PyTorch in Data Science/Machine Learning</h3>\
            <p>PyTorch is een dynamische open source machine learning library die wordt gekenmerkt door zijn flexibiliteit en eenvoud. Enkele kenmerken zijn:</p>\
            <ul>\
              <li><strong>Dynamic Computational Graphs:</strong> PyTorch maakt gebruik van dynamische berekeningsgrafieken, waardoor het gemakkelijk is om modellen te bouwen en aan te passen.</li>\
              <li><strong>Community-Driven:</strong> Met een actieve community is PyTorch ideaal voor experimenteel onderzoek en snelle prototyping.</li>\
              <li><strong>Libtorch:</strong> PyTorch kan ook worden gebruikt als een C++ API via de Libtorch-library.</li>\
            </ul>",
};

export default pytorch;
