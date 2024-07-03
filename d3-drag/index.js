console.log("D3 drag");
const radius = 25;

const height = 300;
const width = 300;

const svg = d3
  .select("#root")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("border", "2px solid");

function dragStart() {
  const circleId = this.id;
  if (circleId === "circle_0") {
    d3.select(`#${circleId}`).attr("fill", "red");
  } else {
    d3.select(`#${circleId}`).attr("fill", "blue");
  }
}

function dragEnd() {
  const circleId = this.id;
  d3.select(`#${circleId}`).attr("fill", "black");
}
function dragCircle() {
  const circle = d3.select(this);
  const dx = Math.max(radius, Math.min(width - radius, d3.event.x));
  const dy = Math.max(radius, Math.min(height - radius, d3.event.y));
  circle.attr("cx", dx).attr("cy", dy);
}

const drag = d3
  .drag()
  .on("start", dragStart)
  .on("end", dragEnd)
  .on("drag", dragCircle);

const circle = svg.append("g").attr("class", "circle_wrapper");

circle
  .selectAll("circle")
  .data([
    { x: 50, y: 50 },
    { x: 150, y: 150 },
  ])
  .enter()
  .append("circle")
  .attr("id", (d, i) => `circle_${i}`)
  .attr("cx", (d) => d.x)
  .attr("cy", (d) => d.y)
  .attr("r", radius)
  .call(drag);
