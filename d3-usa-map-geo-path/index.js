import { geoGeometryCollection } from "./usa-data.js";
console.log("D3 USA map geo path");

const height = 400;
const width = 400;
const geo = d3.geoPath();

console.log(geo(geoGeometryCollection));
