console.log("group element");

const circleData = [
  { cx: "20", cy: "20", r: "15" },
  { cx: "60", cy: "60", r: "15" },
];

const rectData = [
  { x: "40", y: "0", height: "30", width: "30" },
  { x: "0", y: "40", height: "30", width: "30" },
];

const svgElement = d3
  .select(".root")
  .append("svg")
  .attr("width", "200")
  .attr("height", "200");

const groupElement = svgElement
  .append("g")
  .attr("fill", "orange")
  .attr("transform", "translate(20,20)");

const circleElement = groupElement
  .selectAll("circle")
  .data(circleData)
  .enter()
  .append("circle")
  .attr("cx", (d) => d.cx)
  .attr("cy", (d) => d.cy)
  .attr("r", (d) => d.r);

const reactElement = svgElement
  .append("g")
  .attr("fill", "#64d500")
  .attr("transform", "translate(25,25)")
  .selectAll("rect")
  .data(rectData)
  .enter()
  .append("rect")
  .attr("x", (d) => d.x)
  .attr("y", (d) => d.y)
  .attr("height", (d) => d.height)
  .attr("width", (d) => d.width);
