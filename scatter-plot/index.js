console.log("Scatter Plot Graph");

const margin = {
  top: 20,
  right: 20,
  bottom: 30,
  left: 40,
};

const width = 960 + margin.left - margin.right;
const height = 500 + margin.top - margin.bottom;

const x = d3.scaleLinear().domain([0, width]);
const y = d3.scaleLinear().domain([height, 0]);

const xAxis = d3.axisBottom().scale(x);
const yAxis = d3.axisLeft().scale(y);
