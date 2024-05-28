const rectData = [
  {
    label: "first",
    x: 0,
    y: 0,
  },
  {
    label: "second",
    x: 50,
    y: 50,
  },
  {
    label: "third",
    x: 100,
    y: 100,
  },
  {
    label: "fourth",
    x: 150,
    y: 150,
  },
];

const circleData = [
  {
    label: "first",
    cx: 25,
    cy: 25,
    r: 25,
  },
  {
    label: "second",
    cx: 75,
    cy: 75,
    r: 25,
  },
  {
    label: "third",
    cx: 125,
    cy: 125,
    r: 25,
  },
  {
    label: "fourth",
    cx: 175,
    cy: 175,
    r: 25,
  },
];

const lineData = [
  {
    label: "first",
    x0: 0,
    y0: 0,
    x1: 25,
    y1: 25,
  },
  {
    label: "second",
    x0: 50,
    y0: 50,
    x1: 75,
    y1: 75,
  },
  {
    label: "third",
    x0: 100,
    y0: 100,
    x1: 125,
    y1: 125,
  },
  {
    label: "fourth",
    x0: 150,
    y0: 150,
    x1: 175,
    y1: 175,
  },
];

const ellipseData = [
  {
    label: "first",
    cx: 25,
    cy: 25,
    rx: 25,
    ry: 15,
  },
  {
    label: "second",
    cx: 75,
    cy: 75,
    rx: 25,
    ry: 15,
  },
  {
    label: "third",
    cx: 125,
    cy: 125,
    rx: 25,
    ry: 15,
  },
  {
    label: "fourth",
    cx: 175,
    cy: 175,
    rx: 25,
    ry: 15,
  },
];

const rectSvgContainer = d3
  .select(".rectangle")
  .append("svg")
  .attr("width", 200)
  .attr("height", 200);

const rectShape = rectSvgContainer
  .selectAll("rect")
  .data(rectData)
  .enter()
  .append("rect")
  .attr("x", (d) => d.x)
  .attr("y", (d) => d.y)
  .attr("height", 40)
  .attr("width", 40)
  .attr("fill", "red");

const circleSvgContainer = d3
  .select(".circle")
  .append("svg")
  .attr("width", 200)
  .attr("height", 200);

const circleShape = circleSvgContainer
  .selectAll("circle")
  .data(circleData)
  .enter()
  .append("circle")
  .attr("cx", (d) => d.cx)
  .attr("cy", (d) => d.cy)
  .attr("r", (d) => d.r)
  .attr("fill", "red");

const lineSvgContainer = d3
  .select(".line")
  .append("svg")
  .attr("width", 200)
  .attr("height", 200);

const lineShape = lineSvgContainer
  .selectAll("line")
  .data(lineData)
  .enter()
  .append("line")
  .attr("x0", (d) => d.x0)
  .attr("y0", (d) => d.y0)
  .attr("x1", (d) => d.x1)
  .attr("y1", (d) => d.y1)
  .attr("stroke-width", "2")
  .attr("stroke", "red");

const ellipseSvgContainer = d3
  .select(".ellipse")
  .append("svg")
  .attr("width", 200)
  .attr("height", 200);

const ellipseShape = ellipseSvgContainer
  .selectAll("ellipse")
  .data(ellipseData)
  .enter()
  .append("ellipse")
  .attr("cx", (d) => d.cx)
  .attr("cy", (d) => d.cy)
  .attr("rx", (d) => d.rx)
  .attr("ry", (d) => d.ry);
