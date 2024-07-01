console.log("D3 Events");

const rectData = [
  {
    x: "5",
    y: "5",
    height: "50",
    width: "50",
    color: "#1f77b4",
  },
  {
    x: "5",
    y: "75",
    height: "50",
    width: "50",
    color: "#ff7f0e",
  },
  {
    x: "5",
    y: "145",
    height: "50",
    width: "50",
    color: "#2ca02c",
  },
  {
    x: "5",
    y: "215",
    height: "50",
    width: "50",
    color: "#d62728",
  },
];

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", "100vh")
  .attr("width", "100%")
  .style("border", "1px solid")
  .append("g")
  .attr("transform", "translate(15,15)");
svg
  .selectAll("rect")
  .data(rectData)
  .enter()
  .append("rect")
  .attr("x", (d) => d.x)
  .attr("y", (d) => d.y)
  .attr("width", (d) => d.width)
  .attr("height", (d) => d.height);

d3.selectAll("rect").on("mouseover", function (d) {
  d3.selectAll("rect").attr("opacity", 0.5);
  d3.select(this)
    .attr("opacity", 1)
    .style("fill", (d) => d.color);
});

d3.selectAll("rect").on("mouseout", (d) => {
  d3.selectAll("rect").attr("opacity", 1).style("fill", "black");
});
