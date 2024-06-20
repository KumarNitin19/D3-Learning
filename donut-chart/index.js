console.log("Donut Chart");

const donutChartData = { a: 9, b: 20, c: 30, d: 8, e: 12 };

const height = 500;
const width = 960;
const margin = 40;

const radius = Math.min(height, width) / 2;

const arc = d3
  .arc()
  .innerRadius(radius - 50)
  .outerRadius(radius);

const pie = d3.pie().value((d) => d.value);

const dataReady = pie(d3.entries(donutChartData));

const color = d3
  .scaleOrdinal()
  .domain(donutChartData)
  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", height)
  .attr("width", width)
  .append("g")
  .attr("transform", `translate(${width / 2}, ${height / 2})`);

svg
  .selectAll(".arc")
  .data(dataReady)
  .enter()
  .append("path")
  .attr("d", arc)
  .attr("class", "arc")
  .attr("fill", (d) => color(d.data.key))
  .attr("stroke", "white")
  .attr("stroke-width", 2);

svg
  .selectAll("text")
  .data(dataReady)
  .enter()
  .append("text")
  .text((d) => d.data.key)
  .attr("transform", (d) => `translate(${arc.centroid(d)})`)
  .attr("fill", "white");
