console.log("Bar chart with negative value");

const barChartData = [-15, -20, -22, -18, 2, 6, -26, -18];

const margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
};

const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const x0 = Math.max(-d3.min(barChartData), d3.max(barChartData));

const x = d3.scaleLinear().domain([-x0, x0]).range([0, width]);

const y = d3
  .scaleBand()
  .domain(d3.range(barChartData.length))
  .range([height, 0]);

const xAxis = d3.axisTop().scale(x);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

svg
  .selectAll(".bar")
  .data(barChartData)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", (d) => x(Math.min(0, d)))
  .attr("y", (d, i) => y(i))
  .attr("width", (d) => Math.abs(x(d) - x(0)))
  .attr("height", y.bandwidth())
  .attr("fill", (d) => (d > 0 ? "green" : "red"))
  .attr("stroke-width", 2);

svg.append("g").call(xAxis);

svg
  .append("g")
  .append("line")
  .attr("x1", x(0))
  .attr("x2", x(0))
  .attr("y1", 0)
  .attr("y2", height);
