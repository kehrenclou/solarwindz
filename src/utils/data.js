/* --------------------------------- imports -------------------------------- */
import dataSet from "./parsedDataNoSpaces.json";

/* -------------------------------------------------------------------------- */
/*                                   consts                                   */
/* -------------------------------------------------------------------------- */

/* ------------------------- 1. change data to Array ------------------------ */
// const arrDataSet = Object.entries(dataSet);

/* --------------------------- 2.filter by status construction--------------------------- */
export const dataConstruction = Object.keys(dataSet)
  .map((x) => dataSet[x])
  .filter((x) => x.Status === "construction");

/* -------------- 3. create array of Region keys in construction arr ------------- */
function newArrFromKey(array, key) {
  return [...new Set(Object.values(array).map((item) => item[key]))];
}
export const keysConstruction = newArrFromKey(dataConstruction, "Region");

/* ---------- 4. create region solar  data set on constructiondata ---------- */
export const regionSolarConstructionData = dataConstruction.map(
  ({
    Country,
    Latitude,
    Longitude,
    Status,
    windcapacity,
    index,
    startyear,
    ...rest
  }) => rest
);
/* ------------------ 5. sum solar for operating by region ------------------ */
export const dataSolarSumRegionConstruction = Object.values(
  regionSolarConstructionData.reduce((item, { solarcapacity, ...rest }) => {
    const key = Object.entries(rest).join("-");

    item[key] = item[key] || { ...rest, solarcapacity: 0 };
    return (item[key].solarcapacity += solarcapacity), item;
  }, {})
);



/* -------------------------------- function -------------------------------- */
export function Data() {
  return <div>page</div>;
}

/* --------------------------------- exports -------------------------------- */

