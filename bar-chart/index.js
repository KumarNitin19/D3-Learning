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

const x = d3.scaleBand().range([0, width]);

const y = d3.scaleLinear().range([height, 0]);

const xAxis = d3.axisBottom().scale(x);
const yAxis = d3.axisLeft().scale(y);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv(
  csvDataUrl,
  function (d) {
    return {
      country: d.Country,
      value: +d.Value,
    };
  },
  function (data) {
    x.domain(data.map((d) => d.country)).padding(0.2);
    y.domain([0, d3.max(data, (d) => d.value)]);
    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0,${height})`)
      .call(xAxis);

    svg
      .append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .attr("text-anchor", "end")
      .text("Frequency")
      .attr("fill", "red");

    svg.selectAll(".bar").data(data).enter().append("rect");
  }
);
