import { geoGeometryCollection } from "./usa-data.js";
console.log("D3 USA map geo path");

const height = 400;
const width = 400;
const geo = d3.geoPath();

// console.log(geo(geoGeometryCollection));

function zoomFunction() {
  const zoomVal = d3.event.tranform;
  const x = zoomVal.x;
  const y = zoomVal.y;
  const scale = zoomVal.k;
  d3.selectAll("path").attr(
    "transform",
    `translate(${x},${y}) scale(${scale})`
  );
}
