console.log("d3 zoom svg lines and svg path");

const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};

const height = 500 - margin.top - margin.bottom;
const width = 500 - margin.left - margin.right;

const originalLine = {
  x1: 25,
  y1: 25,
  x2: 125,
  y2: 125,
  ["stroke-width"]: 2,
};

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .style("border", "2px solid");
