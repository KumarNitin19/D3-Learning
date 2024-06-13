console.log("Area Chart");

const csvDataUrl =
  "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv";

const margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
};

const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const x = d3.scaleTime().range([0, width]);
const y = d3.scaleLinear().range([height, 0]);

const xAxis = d3.axisBottom().scale(x);
const yAxis = d3.axisLeft().scale(y);

const parseDate = d3.timeParse("%Y-%m-%d");

const area = d3
  .area()
  .x(function (d) {
    return x(d.date);
  })
  .y0(y(0))
  .y1(function (d) {
    return y(d.value);
  });

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

d3.csv(
  csvDataUrl,
  function (d) {
    return {
      date: parseDate(d.date),
      value: d.value,
    };
  },
  function (data) {
    x.domain(d3.extent(data, (d) => d.date));
    y.domain([0, d3.max(data, (d) => d.value) + 500]);
  }
);
