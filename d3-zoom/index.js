console.log("d3 zoom");

const margin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30,
};

const height = 300 - margin.top - margin.bottom;
const width = 300 - margin.left - margin.right;
const x = d3.scaleLinear().domain([0, 100]).range([0, width]);
const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);

const xAxis = d3.axisBottom().scale(x);
const yAxis = d3.axisLeft().scale(y);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .style("border", "2px solid");

const graphWrapper = svg
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

const x_axis = graphWrapper
  .append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0, ${height})`)
  .call(xAxis);
const y_axis = graphWrapper.append("g").attr("class", "y-axis").call(yAxis);

function zoomFunction() {
  const newXAxis = d3.event.transform.rescaleX(x);
  const newYAxis = d3.event.transform.rescaleY(y);
  x_axis.transition().duration(0).call(xAxis.scale(newXAxis));
  y_axis.transition().duration(0).call(yAxis.scale(newYAxis));
}

const zoom = d3.zoom().scaleExtent([0.5, 5]).on("zoom", zoomFunction);

svg.call(zoom);

const innerSpace = graphWrapper.append("g");

innerSpace
  .selectAll("circle")
  .data([{ x: 40, y: 40 }])
  .enter()
  .append("circle")
  .attr("cx", (d) => x(d.x))
  .attr("cy", (d) => y(d.y))
  .attr("r", 25)
  .attr("fill", "red");
