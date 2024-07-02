console.log("Bar chart with dynamic data");

function updateData() {
  const currentTime = new Date();
  return [
    {
      timeUnit: "minutes",
      timeData: currentTime.getMinutes(),
    },
    {
      timeUnit: "seconds",
      timeData: currentTime.getSeconds(),
    },
  ];
}

const margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
};

const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const x = d3
  .scaleBand()
  .domain(["minutes", "seconds"])
  .range([0, width])
  .padding(0.2);
const y = d3.scaleLinear().range([height, 0]).domain([0, 60]).nice();

const xAxis = d3.axisBottom().scale(x);
const yAxis = d3.axisLeft().scale(y);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

svg
  .append("g")
  .attr("class", "x axis")
  .attr("transform", `translate(0, ${height})`)
  .call(xAxis);

svg.append("g").attr("class", "y axis").call(yAxis);

const chartData = updateData();
console.log(chartData);
svg
  .append("g")
  .selectAll("rect")
  .data(chartData, (d) => d.timeUnit)
  .enter()
  .append("rect")
  .attr("class", "bar")
  .attr("x", (d) => x(d.timeUnit))
  .attr("y", (d) => y(d.timeData))
  .attr("width", x.bandwidth())
  .attr("height", (d) => height - y(d.timeData))
  .attr("fill", "steelblue");

function reDraw() {
  const chartData = updateData();

  d3.selectAll(".bar")
    .data(chartData, (d) => d.timeUnit)
    .transition()
    .duration(1000)
    .attr("x", (d) => x(d.timeUnit))
    .attr("y", (d) => y(d.timeData))
    .attr("width", x.bandwidth())
    .attr("height", (d) => height - y(d.timeData))
    .attr("fill", "red");
}

const timeout = setTimeout(() => {
  reDraw();
  clearTimeout(timeout);
}, 2000);
