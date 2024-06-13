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

const color = d3.scaleOrdinal().range(["#e41a1c", "#377eb8", "#4daf4a"]);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv(csvDataUrl, function (data) {
  const subgroups = data.columns.slice(1);
  const groups = d3
    .map(data, function (d) {
      return d.group;
    })
    .keys();

  x0.domain(groups);
  y.domain([0, 50]);
  color.domain(subgroups);
  x1.domain(subgroups).range([0, x0.bandwidth()]).padding([0.05]);

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
    .text("Value");

  svg
    .append("g")
    .selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", (d) => `translate(${x0(d.group)},0)`)
    .selectAll("rect")
    .data(function (d) {
      return subgroups.map(function (key) {
        return { key: key, value: d[key] };
      });
    })
    .enter()
    .append("rect")
    .attr("x", (d) => x1(d.key))
    .attr("y", (d) => y(d.value))
    .attr("width", x1.bandwidth())
    .attr("height", (d) => height - y(d.value))
    .attr("fill", (d) => color(d.key));
});
