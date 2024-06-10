console.log("Line Chart");

const csvFileUrl =
  "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv";

const margin = { top: 20, right: 20, bottom: 30, left: 50 };
const height = 500 - margin.top - margin.bottom;
const width = 960 - margin.left - margin.right;

const parseDate = d3.timeParse("%Y-%m-%d");

const x = d3.scaleTime().range([0, width]);
const y = d3.scaleLinear().range([height, 0]);

const xAxis = d3.axisBottom().scale(x);
const yAxis = d3.axisLeft().scale(y);

const line = d3
  .line()
  .x((d) => x(d.date))
  .y((d) => y(d.value));

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv(
  csvFileUrl,
  function (d) {
    return { date: parseDate(d.date), value: +d.value };
  },
  function (data) {
    x.domain(d3.extent(data, (d) => d.date));
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
      .attr("fill", "steelblue")
      .style("text-anchor", "end")
      .text("Price ($)");

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  }
);
