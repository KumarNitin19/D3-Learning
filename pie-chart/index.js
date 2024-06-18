console.log("Pie Chart");

const pieChartData = { a: 9, b: 20, c: 30, d: 8, e: 12 };

const margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
};

const height = 500 - margin.top - margin.bottom;
const width = 960 - margin.right - margin.left;

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);
