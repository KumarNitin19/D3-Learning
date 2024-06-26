console.log("linear scale");

const myData = [
  {
    n: 0,
    p: 50,
    r: 9,
    fill: "red",
  },
  {
    n: 200,
    p: 125,
    r: 24,
    fill: "green",
  },
  {
    n: 300,
    p: 250,
    r: 17,
    fill: "orange",
  },
  {
    n: 400,
    p: 325,
    r: 20,
    fill: "yellow",
  },
];

const margin = {
  top: 40,
  right: 40,
  bottom: 40,
  left: 40,
};

const width = 280 - margin.left;
const height = 280 - margin.bottom;

const rangeSVGX = [margin.left, width];
const rangeSVGY = [margin.top, height];

const minAndMaxX = d3.extent(myData, (d) => d.n);
const minAndMaxY = d3.extent(myData, (d) => d.p);

const xLineScale = d3.scaleLinear().domain(minAndMaxX).range(rangeSVGX);
const yLineScale = d3.scaleLinear().domain(minAndMaxY).range(rangeSVGY);

const svgViewPort = d3
  .select("body")
  .insert("svg", ":first-child")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom);

const circle = svgViewPort
  .selectAll("circle")
  .data(myData)
  .enter()
  .append("circle");

const circleAttr = circle
  .attr("cx", (d) => xLineScale(d.n))
  .attr("cy", (d) => yLineScale(d.p))
  .attr("r", (d) => d.r)
  .attr("fill", (d) => d.fill);
