import { GeoData } from "./data.js";

console.log("D3 map projection");

const geoPath = d3.geoPath();

const width = 600;
const height = 600;

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", height)
  .attr("width", width)
  .style("border", "3px solid")
  .append("g")
  .attr("transform", `translate(30, 30)`);

svg
  .selectAll("path")
  .data(GeoData.features)
  .enter()
  .append("path")
  .attr("d", (d) => geoPath(d));
