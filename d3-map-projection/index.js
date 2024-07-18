console.log("D3 map projection");

const geo = d3.geoPath();

const width = 600;
const height = 600;

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", height)
  .attr("width", width)
  .append("g")
  .attr("transform", `translate(30, 30)`);
