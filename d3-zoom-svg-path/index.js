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

const width = 900 - margin.left - margin.right;
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
  .style("border", "2px solid");

const svgPathInstructions =
  "M 30 80 C 0 160, 125 160, 95 80 M 105 80 C 75 160, 200 160, 170 80";

function zoomSvgPath() {
  const event = d3.event.transform;
  const panX = event.x;
  const panY = event.y;
  const scaleMultiplier = event.k;

  const newXAxis = d3.event.transform.rescaleX(x);
  const newYAxis = d3.event.transform.rescaleY(y);

  d3.select(".path_drawing").attr(
    "transform",
    `translate(${panX}, ${panY}) scale(${scaleMultiplier})`
  );
  d3.selectAll(".ellipseOne")
    .attr("cx", (d) => newXAxis(d.cx))
    .attr("cy", (d) => newYAxis(d.cy))
    .attr("rx", (d) => d.rx * scaleMultiplier)
    .attr("ry", (d) => d.ry * scaleMultiplier);
  d3.selectAll(".ellipseTwo")
    .attr("cx", (d) => newXAxis(d.cx))
    .attr("cy", (d) => newYAxis(d.cy))
    .attr("rx", (d) => d.rx * scaleMultiplier)
    .attr("ry", (d) => d.ry * scaleMultiplier);
}

const zoomPath = d3.zoom().scaleExtent([0.5, 5]).on("zoom", zoomSvgPath);
const pathInnerSpace = svgPath
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`)
  .call(zoomPath);

pathInnerSpace
  .append("g")
  .attr("class", "hidden_rectangle")
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "white");

pathInnerSpace
  .append("g")
  .append("path")
  .attr("class", "path_drawing")
  .attr("d", svgPathInstructions)
  .attr("fill", "#ce966e")
  .attr("stroke", "#c5906b")
  .attr("stroke-width", 2);

const ellipseOne = [
  {
    cx: 60,
    cy: 300,
    rx: 9,
    ry: 8,
  },
  {
    cx: 137.5,
    cy: 300,
    rx: 9,
    ry: 8,
  },
];

const ellipseTwo = [
  {
    cx: 60,
    cy: 300,
    rx: 3.5,
    ry: 2.5,
  },
  {
    cx: 137.5,
    cy: 300,
    rx: 3.5,
    ry: 2.5,
  },
];

pathInnerSpace.append("g").call(xAxis).style("display", "none");
pathInnerSpace.append("g").call(yAxis).style("display", "none");

pathInnerSpace
  .append("g")
  .selectAll(".ellipseOne")
  .data(ellipseOne)
  .enter()
  .append("ellipse")
  .attr("class", "ellipseOne")
  .attr("cx", (d) => x(d.cx))
  .attr("cy", (d) => y(d.cy))
  .attr("rx", (d) => d.rx)
  .attr("ry", (d) => d.ry)
  .attr("fill", "#814815");

pathInnerSpace
  .append("g")
  .selectAll(".ellipseTwo")
  .data(ellipseTwo)
  .enter()
  .append("ellipse")
  .attr("class", "ellipseTwo")
  .attr("cx", (d) => x(d.cx))
  .attr("cy", (d) => y(d.cy))
  .attr("rx", (d) => d.rx)
  .attr("ry", (d) => d.ry)
  .attr("fill", "#553100");
