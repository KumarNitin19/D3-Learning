const rectData = [
  {
    label: "first",
    x: 0,
    y: 0,
  },
  {
    label: "second",
    x: 50,
    y: 50,
  },
  {
    label: "third",
    x: 100,
    y: 100,
  },
  {
    label: "fourth",
    x: 150,
    y: 150,
  },
];

const svgContainer = d3
  .select(".rectangle")
  .append("svg")
  .attr("width", 200)
  .attr("height", 200);

const rectShape = svgContainer
  .selectAll("rect")
  .data(rectData)
  .enter()
  .append("rect")
  .attr("x", (d) => d.x)
  .attr("y", (d) => d.y)
  .attr("height", 40)
  .attr("width", 40)
  .attr("fill", "red");
