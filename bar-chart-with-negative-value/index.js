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
