console.log("Bar Chart");

const margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
};

const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const formatPercent = d3.format(".0%");

const x = d3.scaleBand().rangeRound([0, width], 0.1);

const y = d3.scaleLinear().range([height, 0]);

const xAxis = d3.axisBottom().scale(x);
const yAxis = d3.axisLeft().scale(y).tickFormat(formatPercent);
