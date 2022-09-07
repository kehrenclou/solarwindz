/* --------------------------------- imports -------------------------------- */
import dataSet from "../data/parsedDataNoSpaces.json";

/* -------------------------------------------------------------------------- */
/*                                   consts                                   */
/* -------------------------------------------------------------------------- */

/* ------------------------- 1. change data to Array none of these work------------------------ */
// const arrDataSet = Object.entries(dataSet);

// const newData = [];
// const originalLength = Object.keys(originData).length;

// for (let i = 0; i < originalLength; i++) {
//   const newItem = {};
//   for (const key of Object.keys(originData[i]) {
//     newItem[key.replace(" ", "")] = originData[i][key];
//   }
//   newData[i] = newItem;
// }
// console.log(newData);

// const result = dataSet.map(({}))

/* -------------------------------------------------------------------------- */
/*                              FILTER BY STATUS                              */
/* -------------------------------------------------------------------------- */

/* ------------------------------ CONSTRUCTION ------------------------------ */

export const dataConstruction = Object.keys(dataSet)
  .map((x) => dataSet[x])
  .filter((x) => x.Status === "construction");

//returns an Array of Objects Status="Construction"
/* -------------------------------- OPERATING ------------------------------- */

export const dataOperating = Object.keys(dataSet)
  .map((x) => dataSet[x])
  .filter((x) => x.Status === "operating");

//returns an Array of Objects Status="operating"

/* -------------------------------------------------------------------------- */
/*                           GRAB REGIONS FOR LABELS                          */
/* -------------------------------------------------------------------------- */

function newArrFromKey(array, key) {
  return [...new Set(Object.values(array).map((item) => item[key]))];
}
// / this function returns an array of Regions
/* ------------------------------ CONSTRUCTION ------------------------------ */

export const keysConstruction = newArrFromKey(dataConstruction, "Region");

/* -------------------------------- OPERATING ------------------------------- */

export const keysOperating = newArrFromKey(dataOperating, "Region");

/* -------------------------------------------------------------------------- */
/*                 CREATE SOLAR AND WIND SETS FOR EACH STATUS                 */
/* -------------------------------------------------------------------------- */
//returns an array of object with Region and solarcapacity line by line
//eliminates all other fields in set
/* -------------------------- CONSTRUCTION - SOLAR -------------------------- */
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

/* --------------------------- CONSTRUCTION - WIND -------------------------- */
export const regionWindConstructionData = dataConstruction.map(
  ({
    Country,
    Latitude,
    Longitude,
    Status,
    solarcapacity,
    index,
    startyear,
    ...rest
  }) => rest
);

/* -------------------------- OPERATING - SOLAR -------------------------- */
export const regionSolarOperatingData = dataOperating.map(
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

/* --------------------------- OPERATING - WIND -------------------------- */
export const regionWindOperatingData = dataConstruction.map(
  ({
    Country,
    Latitude,
    Longitude,
    Status,
    solarcapacity,
    index,
    startyear,
    ...rest
  }) => rest
);

/* -------------------------------------------------------------------------- */
/*                    REGIONAL SUMATIONS OF SOLAR AND WIND                    */
/* -------------------------------------------------------------------------- */
// returns array of object with Region and sum of solar capacity

/* ------------------------ CONSTRUCTION SOLAR - SUM ------------------------ */

export const solarDataSumConst = Object.values(
  regionSolarConstructionData.reduce((item, { solarcapacity, ...rest }) => {
    const key = Object.entries(rest).join("-");

    item[key] = item[key] || { ...rest, solarcapacity: 0 };

    return (item[key].solarcapacity += solarcapacity), item;
  }, {})
);
/* ------------------------ CONSTRUCTION WIND - SUM ------------------------ */

export const windDataSumConst = Object.values(
  regionWindConstructionData.reduce((item, { windcapacity, ...rest }) => {
    const key = Object.entries(rest).join("-");

    item[key] = item[key] || { ...rest, windcapacity: 0 };

    return (item[key].windcapacity += windcapacity), item;
  }, {})
);
