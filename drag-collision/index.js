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

const circles = d3.range(324).map((i) => ({
  x: (i % 25) * (radius + 1) * 2,
  y: Math.floor(i / 25) * (radius + 1) * 2,
}));

const simulation = d3
  .forceSimulation(circles)
  .force("collide", d3.forceCollide(radius + 1).iterations(4))
  .on("tick", drawCircles);

d3.select("#myCanvas").call(d3.drag().subject(subject));

function drawCircles() {
  context.clearRect(0, 0, width, height);
  context.save();
  circles.forEach(drawCircle);
  context.strokeStyle = "#fff";
  context.stroke();
}

function drawCircle(d) {
  context.beginPath();
  context.fillStyle = d.type;
  context.moveTo(d.x + radius, d.y);
  context.arc(d.x, d.y, radius, 0, 2 * Math.PI);
  context.fill();
}

function subject(event) {
  return simulation.find(event.x, event.y, radius);
}

function started(event) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  event.subject.fx = event.subject.x;
  event.subject.fy = event.subject.y;
}

function dragged(event) {
  event.subject.fx = event.x;
  event.subject.fy = event.y;
}

function ended(event) {
  if (!event.active) simulation.alphaTarget(0);
  event.subject.fx = null;
  event.subject.fy = null;
}
