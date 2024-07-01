console.log("D3 Forms");

const rectData = [
  { x: "5", y: "25", height: "50", width: "50" },
  { x: "85", y: "105", height: "50", width: "50" },
  { x: "165", y: "185", height: "50", width: "50" },
];

const svg = d3
  .select("#root")
  .append("svg")
  .attr("width", 300)
  .attr("height", 300)
  .style("border", "1px solid")
  .append("g")
  .attr("transform", "translate(10,10)");

svg
  .selectAll("rect")
  .data(rectData)
  .enter()
  .append("rect")
  .attr("x", (d) => d.x)
  .attr("y", (d) => d.y)
  .attr("height", (d) => d.height)
  .attr("width", (d) => d.width);

function widthTransition() {
  d3.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("width", 280)
    .transition()
    .duration(1000)
    .attr("width", (d) => d.width);
}

function heightTransition() {
  d3.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("height", 280)
    .transition()
    .duration(1000)
    .attr("height", (d) => d.height);
}

d3.selectAll("input").on("change", function (e) {
  const selectedValue = this.value;
  if (selectedValue === "width") {
    widthTransition();
  } else if (selectedValue === "height") {
    heightTransition();
  }
});
