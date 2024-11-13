console.log("Path between");

const d0 = "M0,0c100,0 0,100 100,100c100,0 0,-100 100,-100";
const d1 = "M0,0c100,0 0,100 100,100c100,0 0,-100 100,-100c100,0 0,100 100,100";

const width = 928;
const height = 500;

const svg = d3
  .select("#root")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("viewBox", [0, 0, width, height])
  .attr("style", "max-width: 100%; height: auto;");

svg
  .append("path")
  .attr("transform", "translate(180,150)scale(2,2)")
  .attr("fill", "none")
  .attr("stroke", "currentColor")
  .attr("stroke-width", 1.5)
  .attr("d", d0)
  .transition()
  .duration(2000)
  .on("start", function repeat() {
    d3.active(this)
      .attrTween("d", pathTween(d1, 4))
      .transition()
      .attrTween("d", pathTween(d0, 4))
      .transition()
      .on("start", repeat);
  });

svg.node();
