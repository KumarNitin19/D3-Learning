console.log("d3 zoom svg path");

const margin = {
  top: 40,
  right: 40,
  bottom: 40,
  left: 40,
};

const strokeWidth = 2;
const originalTriangle = [
  { x: 10, y: 10 },
  { x: 110, y: 10 },
  { x: 10, y: 110 },
  { x: 10, y: 110 },
];

const width = 500 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .style("border", "2px solid");
