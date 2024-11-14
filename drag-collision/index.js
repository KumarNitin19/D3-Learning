console.log("Drag Collision");

const height = 500;
// const context = window.context2d(width, height);
// const canvas = context.canvas;
const radius = 20;

const circles = d3.range(324).map((i) => ({
  x: (i % 25) * (radius + 1) * 2,
  y: Math.floor(i / 25) * (radius + 1) * 2,
}));

// const simulation = d3
//   .forceSimulation(circles)
//   .force("collide", d3.forceCollide(radius + 1).iterations(4))
//   .on("tick", drawCircles);

const canvaElem = d3
  .select(".root")
  .append("canvas")
  .attr("height", 500)
  .attr("width", 1000)
  .attr("style", "border:2px solid #000000;");

const ctx = d3.select("canvas").getContext("2d");

canvaElem.call(
  d3
    .drag()
    .subject(subject)
    .on("start", started)
    .on("drag", dragged)
    .on("end", ended)
);
