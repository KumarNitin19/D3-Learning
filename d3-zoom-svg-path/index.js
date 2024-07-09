console.log("d3 zoom svg path");

const margin = {
  top: 40,
  right: 40,
  bottom: 40,
  left: 40,
};

const strokeWidth = 2;
const originalTriangle = [
  { x: 10, y: 10 },
  { x: 110, y: 10 },
  { x: 10, y: 110 },
  { x: 10, y: 10 },
];

const width = 500 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const x = d3.scaleLinear().domain([0, width]).range([0, width]);
const y = d3.scaleLinear().domain([0, height]).range([height, 0]);

const xAxis = d3.axisBottom().scale(x);
const yAxis = d3.axisLeft().scale(y);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .style("border", "2px solid");

const innerSpace = svg
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

innerSpace
  .append("g")
  .attr("class", "rectangle")
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", x(width))
  .attr("height", y(0))
  .style("fill", "white");

const x_axis = innerSpace
  .append("g")
  .attr("class", "x-axis")
  .attr("transform", `translate(0, ${height})`)
  .call(xAxis);

const y_axis = innerSpace.append("g").attr("class", "y-axis").call(yAxis);

function zoomFunction() {
  const newXAxis = d3.event.transform.rescaleX(x);
  const newYAxis = d3.event.transform.rescaleY(y);

  const scale = d3.event.transform.k;

  x_axis.transition().duration(0).call(xAxis.scale(newXAxis));
  y_axis.transition().duration(0).call(yAxis.scale(newYAxis));

  const newLineFunction = d3
    .line()
    .x((d) => newXAxis(d.x))
    .y((d) => newYAxis(d.y))
    .curve(d3.curveLinear);

  d3.select(".triangle")
    .attr("d", newLineFunction(originalTriangle))
    .attr("stroke-width", strokeWidth * scale);
}

const zoom = d3.zoom().scaleExtent([0.5, 5]).on("zoom", zoomFunction);

innerSpace.call(zoom);

const lineFunction = d3
  .line()
  .x((d) => x(d.x))
  .y((d) => y(d.y))
  .curve(d3.curveLinear);

innerSpace
  .append("g")
  .attr("class", "triangle_graph")
  .append("path")
  .attr("class", "triangle")
  .attr("d", lineFunction(originalTriangle))
  .attr("stroke", "red")
  .attr("stroke-width", strokeWidth)
  .attr("fill", "none");

// Adding zoom to svg path elements

const svgPath = d3
  .select("#root_path")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);
