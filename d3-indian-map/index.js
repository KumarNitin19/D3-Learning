import { INDIAN_SUBCONTINENT_DATA } from "./data/indianSubcontinentData.js";
console.log("Indian Map", INDIAN_SUBCONTINENT_DATA);

const margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
};

const width = 900 - margin.left - margin.right;
const height = 850 - margin.top - margin.bottom;

const svg = d3
  .select("#root")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .style("border", "5px solid");

const innerSpace = svg
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

function zoomFunction() {
  const panX = d3.event.transform.x;
  const panY = d3.event.transform.y;
  const scale = d3.event.transform.k;

  d3.selectAll(".states").attr(
    "transform",
    `translate(${panX}, ${panY}) scale(${scale})`
  );
}

const zoom = d3.zoom().on("zoom", zoomFunction);

innerSpace.call(zoom);

innerSpace
  .append("g")
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "white");

innerSpace
  .append("g")
  .attr("g", "indian_map")
  .selectAll(".states")
  .data(INDIAN_SUBCONTINENT_DATA)
  .enter()
  .append("path")
  .attr("class", "states")
  .attr("d", (data) => data.d)
  .attr("fill", "#2d7db3");
