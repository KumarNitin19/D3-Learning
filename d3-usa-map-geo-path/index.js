import { geoGeometryCollection } from "./usa-data.js";
console.log("D3 USA map geo path");

const height = 500;
const width = 500;
const geo = d3.geoPath();

// console.log(geo(geoGeometryCollection));

function zoomFunction() {
  const event = d3.event.transform;
  const x = event.x;
  const y = event.y;
  const scale = event.k;
  d3.selectAll("path").attr(
    "transform",
    `translate(${x},${y}) scale(${scale})`
  );
}

const zoom = d3.zoom().scaleExtent([0.5, 5]).on("zoom", zoomFunction);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("border", "2px solid")
  .call(zoom);

svg.append("path").attr("d", geo(geoGeometryCollection)).attr("fill", "red");
