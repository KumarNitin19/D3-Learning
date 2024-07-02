console.log("Dynamic axis");

function generateData(unit) {
  const currentDate = new Date();
  return [
    {
      timeUnit: unit === "seconds" ? "seconds" : "milliseconds",
      timeData: currentDate.getSeconds() * (unit === "seconds" ? 1 : 1000),
    },
  ];
}

const margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
};

const width = 300 - margin.left - margin.right;
const height = 300 - margin.top - margin.bottom;

const x = d3.scaleBand().domain(["seconds"]).range([0, width]);
const y = d3.scaleLinear().domain([0, 59]).range([height, 0]).nice();

const xAxis = d3.axisBottom().scale(x);
const yAxis = d3.axisLeft().scale(y);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

svg
  .append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0, ${height})`)
  .call(xAxis);

svg.append("g").attr("class", "y-axis").call(yAxis);

const chartData = generateData("seconds");

svg
  .append("g")
  .selectAll(".bar")
  .data(chartData)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", (d) => x(d.timeUnit))
  .attr("y", (d) => y(d.timeData))
  .attr("width", x.bandwidth())
  .attr("height", (d) => height - y(d.timeData))
  .attr("fill", (d) => (d.timeData % 2 === 0 ? "red" : "aqua"));

svg
  .append("g")
  .selectAll("text")
  .data(chartData)
  .enter()
  .append("text")
  .attr("class", "text")
  .attr("x", (d) => x(d.timeUnit) + x.bandwidth() / 2)
  .attr("y", (d) => y(d.timeData) - 15)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("fill", (d) => (d.timeData % 2 === 0 ? "black" : "blue"))
  .text((d) => d.timeData);

function draw(data) {
  d3.selectAll(".bar")
    .data(data)
    .transition()
    .duration(500)
    .attr("x", (d) => x(d.timeUnit))
    .attr("y", (d) => y(d.timeData))
    .attr("width", x.bandwidth())
    .attr("height", (d) => height - y(d.timeData))
    .attr("fill", (d) =>
      d.timeData % 2 || d.timeData % 2000 === 0 ? "red" : "aqua"
    );

  d3.selectAll(".text")
    .data(data)
    .transition()
    .duration(500)
    .attr("x", (d) => x(d.timeUnit) + x.bandwidth() / 2)
    .attr("y", (d) => y(d.timeData) - 15)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .attr("fill", (d) =>
      d.timeData % 2 || d.timeData % 2000 === 0 ? "black" : "blue"
    )
    .text((d) => d.timeData);
}

d3.select("#btn_seconds").on("click", function () {
  x.domain(["seconds"]);
  y.domain([0, 60]);
  svg.select(".x-axis").transition().duration(500).call(xAxis);
  svg.select(".y-axis").transition().duration(500).call(yAxis);
  const chartData = generateData("seconds");
  draw(chartData);
});

d3.select("#btn_miliseconds").on("click", function () {
  x.domain(["milliseconds"]);
  y.domain([0, 60 * 1000]);
  svg.select(".x-axis").transition().duration(500).call(xAxis);
  svg.select(".y-axis").transition().duration(500).call(yAxis);
  const chartData = generateData("milliseconds");
  draw(chartData);
});
