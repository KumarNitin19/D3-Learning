console.log("Pie Chart");

const pieChartData = { a: 9, b: 20, c: 30, d: 8, e: 12 };

const height = 500;
const width = 960;

const radius = d3.min(height, width) / 2;

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", height)
  .attr("width", width)
  .append("g")
  .attr("transform", `translate(${width / 2}, ${height / 2})`);

// console.log("test");
