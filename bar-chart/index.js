console.log("Bar Chart");

const csvDataUrl =
  "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv";

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

const svg = d3
  .select("#root")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom);

d3.csv(
  csvDataUrl,
  function (d) {
    return d;
  },
  function (data) {
    x.domain(data.map((d) => d.Country));
    svg.append("g").attr("transform", `translate(0,${height})`).call(xAxis);
  }
);
