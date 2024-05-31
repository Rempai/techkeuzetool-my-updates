import type { Category } from "../../../Types";

const opencv: Category = {
  name: "OpenCV",
  description:
    "OpenCV is een open source computer vision en machine learning software library. Het bevat een reeks algoritmes voor het detecteren van gezichten, objecten, gezichten, etc.",
  image: "https://www.aionlinecourse.com/uploads/blog/description/2022/03/openCV.jpg",
  color: "bg-orange-700",
  sources: [
    {
      name: "OpenCV Website",
      url: "https://opencv.org/",
    },
    {
      name: "OpenCV GitHub Repository",
      url: "https://github.com/opencv/opencv",
    },
  ],
  info: "<h3>OpenCV in Data Science/Machine Learning</h3>\
            <p>OpenCV, oftewel Open Source Computer Vision Library, is een krachtige tool voor het uitvoeren van computer vision-taken. Enkele toepassingen zijn:</p>\
            <ul>\
              <li><strong>Objectherkenning:</strong> OpenCV bevat algoritmes voor het detecteren en herkennen van objecten in afbeeldingen en video's.</li>\
              <li><strong>Beeldverwerking:</strong> Het biedt een breed scala aan functies voor beeldverwerking, zoals filtering en manipulatie.</li>\
              <li><strong>Machine Learning:</strong> OpenCV integreert ook met machine learning frameworks voor geavanceerde taken.</li>\
            </ul>",
};

export default opencv;
