console.log("Grouped bar chart");

const csvDataUrl =
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_stacked.csv";

const margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
};

const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const x0 = d3.scaleBand().range([0, width]).padding([0.1]);
const x1 = d3.scaleBand();
const y = d3.scaleLinear().range([height, 0]);

const xAxis = d3.axisBottom().scale(x0);
const yAxis = d3.axisLeft().scale(y);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);
