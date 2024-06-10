console.log("Line Chart");

const margin = { top: 20, right: 20, bottom: 30, left: 50 };
const height = 500 - margin.top - margin.bottom;
const width = 960 - margin.left - margin.right;

const parseDate = d3.utcFormat("%d-%b-%y").parse;

const x = d3.scaleTime().range([0, width]);
const y = d3.scaleTime().range([0, height]);

const xAxis = d3.axisBottom().scale(x);
const yAxis = d3.axisLeft().scale(y);

const line = d3
  .line()
  .x((d) => x(d.date))
  .y((d) => x(d.close));

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);
