console.log("Drag Collision");

const width = 1000;
const height = 500;
const radius = 20;
const canvas = d3
  .select(".root")
  .append("canvas")
  .attr("id", "myCanvas")
  .attr("height", height)
  .attr("width", width)
  .attr("style", "border:2px solid #000;");
const context = document?.getElementById("myCanvas")?.getContext("2d");
