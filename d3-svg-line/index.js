console.log("d3 svg line");

const margin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30,
};

const width = 500;
const height = 500;

const lineData = [
  {
    x: 5,
    y: 30,
  },
  {
    x: 75,
    y: 30,
  },
  {
    x: 75,
    y: 90,
  },
  {
    x: 150,
    y: 90,
  },
  {
    x: 150,
    y: 150,
  },
  {
    x: 190,
    y: 150,
  },
];

const linePathGenerator = d3
  .line()
  .x((d) => d.x)
  .y((d) => d.y)
  .curve(d3.curveBasis);

linePathGenerator(lineData);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("border", "2px solid")
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);
