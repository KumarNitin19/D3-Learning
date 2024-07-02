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

const x = d3.scaleBand().domain(["minutes", "seconds"]).range([0, width], 0.1);
const y = d3.scaleLinear().range([height, 0]);

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
