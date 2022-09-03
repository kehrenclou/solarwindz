/* --------------------------------- imports -------------------------------- */
import solarbar from "../images/solarbar.jpg";
import solarline from "../images/solarline.jpg";
import windbar from "../images/windbar.jpg";
import windline from "../images/windline.jpg";
import fiftywords from "./fiftywords";

const cardArray = [
  {
    title: "Top 10 Solar Producing Countries",
    link: solarbar,
    caption:  fiftywords ,
  },
  {
    title: "Top 10 Wind Producing Countries",
    link: windbar,
    caption:  fiftywords ,
  },
  {
    title: "Solar Implementation in Top 5 countries since 2009",
    link: solarline,
    caption: fiftywords ,
  },
  {
    title: "Solar Implementation in Top 5 countries since 1980",
    link: windline,
    caption: fiftywords,
  },
];
/* --------------------------------- export --------------------------------- */
export default cardArray;