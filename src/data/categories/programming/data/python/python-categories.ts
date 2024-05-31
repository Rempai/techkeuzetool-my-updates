import type { Category } from "../../../Types";
import * as Python from ".";

export const python: Array<Category> = [
  {
    name: "Python",
    description:
      "Python is een veelgebruikte programmeertaal in de wereld van data science, machine learning en kunstmatige intelligentie.",
    color: "bg-orange-700",
    children: [
      Python.tensorflow.default,
      Python.pytorch.default,
      Python.keras.default,
      Python.opencv.default,
      Python.anaconda.default,
      Python.pandas.default,
      Python.numpy.default,
      Python.matplotlib.default,
    ],
  },
];
