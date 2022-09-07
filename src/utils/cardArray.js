/* --------------------------------- imports -------------------------------- */
import solarbar from "../images/solarbar.jpg";
import solarline from "../images/solarline.jpg";
import windbar from "../images/windbar.jpg";
import windline from "../images/windline.jpg";
import stackedbar from "../images/stackedbar.jpg"

import {
  solarBarText,
  windBarText,
  solarLineText,
  windLineText,
  stackBarText
} from "./captionContent";

const cardArray = [
  {
    title: "Top 10 Solar Producing Countries",
    link: solarbar,
    caption: solarBarText,
  },
  {
    title: "Top 10 Wind Producing Countries",
    link: windbar,
    caption: windBarText,
  },
  {
    title: "Solar Implementation In Top 5 Countries Since 2009",
    link: solarline,
    caption: solarLineText,
  },
  {
    title: "Solar Implementation In Top 5 Countries Since 1980",
    link: windline,
    caption: windLineText,
  },
  {
    title: "Total Wind and Solar Capacity by Region",
    link: stackedbar,
    caption: stackBarText,
  },
];
/* --------------------------------- export --------------------------------- */
export default cardArray;
