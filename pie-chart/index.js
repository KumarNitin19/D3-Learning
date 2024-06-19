console.log("Pie Chart");

const pieChartData = { a: 9, b: 20, c: 30, d: 8, e: 12 };

const height = 450;
const width = 450;
const margin = 40;

const radius = Math.min(height, width) / 2 - margin;

const color = d3
  .scaleOrdinal()
  .domain(pieChartData)
  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", height)
  .attr("width", width)
  .append("g")
  .attr("transform", `translate(${width / 2}, ${height / 2})`);

const pie = d3.pie().value((d) => d.value);
const dataReady = pie(d3.entries(pieChartData));

const arc = d3.arc().innerRadius(0).outerRadius(radius);

svg
  .selectAll(".arc")
  .data(dataReady)
  .enter()
  .append("path")
  .attr("d", arc)
  .attr("fill", (d) => color(d.data.key))
  .attr("stroke", "white")
  .attr("stroke-width", 2)
  .attr("opcaity", 0.7);

svg
  .selectAll("slices")
  .data(dataReady)
  .enter()
  .append("text")
  .text((d) => `grp: ${d.data.key}`)
  .attr("transform", (d) => `translate(${arc.centroid(d)})`)
  .attr("text-anchor", "middle")
  .attr("font-size", 16);

// console.log("test");
