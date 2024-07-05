console.log("d3 zoom svg lines and svg path");

const margin = {
  top: 40,
  right: 40,
  bottom: 40,
  left: 40,
};

const height = 500 - margin.top - margin.bottom;
const width = 500 - margin.left - margin.right;

const originalLine = {
  x1: 25,
  y1: 25,
  x2: 125,
  y2: 125,
  ["stroke-width"]: 2,
};

const x = d3.scaleLinear().domain([0, width]).range([0, width]);
const y = d3.scaleLinear().domain([0, height]).range([height, 0]);

const xAxis = d3.axisBottom().scale(x);
const yAxis = d3.axisLeft().scale(y);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .style("border", "2px solid")
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

svg
  .append("g")
  .attr("class", "rectangle")
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", x(width))
  .attr("height", y(0))
  .style("fill", "white");

const x_axis = svg
  .append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0, ${height})`)
  .call(xAxis);
const y_axis = svg.append("g").attr("class", "y-axis").call(yAxis);

svg
  .append("g")
  .attr("id", "line_group")
  .selectAll("line")
  .data([originalLine])
  .enter()
  .append("line")
  .attr("x1", (d) => x(d.x1))
  .attr("y1", (d) => y(d.y1))
  .attr("x2", (d) => x(d.x2))
  .attr("y2", (d) => y(d.y2))
  .attr("stroke-width", (d) => d["stroke-width"])
  .attr("stroke", "red");

function zoomFunction() {
  const lines = d3.select("#line_group").selectAll("line");
  const newXAxis = d3.event.transform.rescaleX(x);
  const newYAxis = d3.event.transform.rescaleY(y);

  x_axis.transition().duration(0).call(xAxis.scale(newXAxis));
  y_axis.transition().duration(0).call(yAxis.scale(newYAxis));

  const scale = d3.event.transform.k;

  lines
    .attr("x1", (d) => newXAxis(d.x1))
    .attr("y1", (d) => newYAxis(d.y1))
    .attr("x2", (d) => newXAxis(d.x2))
    .attr("y2", (d) => newYAxis(d.y2))
    .attr("stroke-width", (d) => scale * d["stroke-width"]);
}

const zoom = d3.zoom().scaleExtent([0.5, 5]).on("zoom", zoomFunction);
svg.call(zoom);
