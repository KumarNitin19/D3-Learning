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

const rangeSVGX = [0, 200];
const rangeSVGY = [0, 200];

const minAndMaxX = d3.extent(myData, (d) => d.n);
const minAndMaxY = d3.extent(myData, (d) => d.p);

const xLineScale = d3.scaleLinear().domain(minAndMaxX).range(rangeSVGX);
const yLineScale = d3.scaleLinear().domain(minAndMaxY).range(rangeSVGY);

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
  .attr("cx", (d) => xLineScale(d.n))
  .attr("cy", (d) => yLineScale(d.p))
  .attr("r", "15");
