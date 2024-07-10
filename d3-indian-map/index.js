console.log("Indian map");

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
