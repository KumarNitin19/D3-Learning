console.log("linear scale");

const myData = [
  {
    n: 0,
    p: 0,
  },
  {
    n: 200,
    p: 200,
  },
  {
    n: 300,
    p: 300,
  },
  {
    n: 400,
    p: 400,
  },
];

const svgViewPort = d3
  .select("body")
  .insert("svg", ":first-child")
  .attr("width", "200")
  .attr("height", "200");

const circle = svgViewPort
  .selectAll("circle")
  .data(myData)
  .enter()
  .append("circle");

const circleAttr = circle
  .attr("cx", (d) => d.n)
  .attr("cy", (d) => d.y)
  .attr("r", "25");
