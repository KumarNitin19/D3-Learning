console.log("Scatter plot with tooltip");

const scatterPlotDataUrl =
  "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv";

const margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
};

const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const x = d3.scaleLinear().range([0, width]);
const y = d3.scaleLinear().range([height, 0]);

const xAxis = d3.axisBottom().scale(x);
const yAxis = d3.axisLeft().scale(y);

const color = d3.scaleOrdinal(d3.schemeCategory10);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv(
  scatterPlotDataUrl,
  function (d) {
    return {
      grLivArea: +d.GrLivArea,
      salePrice: +d.SalePrice,
    };
  },
  function (data) {
    x.domain([0, d3.max(data, (d) => d.grLivArea)]);
    y.domain([0, d3.max(data, (d) => d.salePrice)]);

    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis)
      .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .attr("text-anchor", "end")
      .attr("fill", "red")
      .text("GRliveArea");

    svg
      .append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .attr("fill", "red")
      .text("Sale Price");
  }
);
