console.log("Stacked Bar Chart");

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

const x = d3.scaleBand().range([0, width]).padding([0.1]);
const y = d3.scaleLinear().range([height, 0]);

const xAxis = d3.axisBottom().scale(x);
const yAxis = d3.axisLeft().scale(y);

const color = d3.scaleOrdinal().range(["#fb6962", "#fcfc99", "#79de79"]);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv(csvDataUrl, function (data) {
  const subgroups = data?.columns?.slice(1);
  const groups = data.map((d) => d.group);

  x.domain(groups);
  y.domain([0, 60]);
  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis);

  svg
    .append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .attr("fill", "red")
    .text("Price ($)");

  const stackedData = d3.stack().keys(subgroups)(data);

  svg
    .append("g")
    .selectAll("g")
    .data(stackedData)
    .enter()
    .append("g")
    .attr("fill", (d) => color(d.key))
    .selectAll("rect")
    .data((d) => d)
    .enter()
    .append("rect")
    .attr("x", (d) => x(d.data.group))
    .attr("y", (d) => y(d[1]))
    .attr("width", x.bandwidth())
    .attr("height", (d) => {
      console.log(d[0], d[1]);
      return y(d[0]) - y(d[1]);
    });
});
