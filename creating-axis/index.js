console.log("d3 axis");

const margin = { top: 50, right: 50, bottom: 50, left: 50 };

const width = 300 - margin.left - margin.right;
const height = 300 - margin.top - margin.bottom;

let myScaleOne = d3.scaleLinear().domain([0, 10]).range([0, 200]);

let myAxisOne = d3.axisBottom().scale(myScaleOne);

let mySvgOne = d3
  .select("#without_Margin_Axis")
  .append("svg")
  .attr("width", "200")
  .attr("height", "200");

let myAxisGroupOne = mySvgOne.append("g").call(myAxisOne);

// Using d3 margin convention

const myScaleTwo = d3.scaleLinear().domain([0, 10]).range([0, width]);

const myAxisTwo = d3.axisBottom().scale(myScaleTwo);

const svgElementTwo = d3
  .select("#with_Margin_Axis")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.bottom}, ${margin.left})`);

const myAxisGroupTwo = svgElementTwo.call(myAxisTwo);

// Axis with orientation  (axis_With_Orientation)

const myScaleThree = d3.scaleLinear().domain([0, 10]).range([0, width]);
const myXAxisThree = d3.axisTop().scale(myScaleThree);

const myYAxisThree = d3.axisLeft().scale(myScaleThree);

const svgElementThree = d3
  .select("#axis_With_Orientation")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom);

const myXAxisGroupThree = svgElementThree
  .append("g")
  .attr("transform", `translate(${margin.bottom}, ${margin.left})`)
  .call(myXAxisThree);
const myYAxisGroupThree = svgElementThree
  .append("g")
  .attr("transform", `translate(${margin.bottom}, ${margin.left})`)
  .call(myYAxisThree);

// Creating scatter graph using d3 axis and scales (scatter_Chart)

const myChartData = [
  {
    x: 7,
    y: 8,
    r: 7,
    fill: "red",
  },
  {
    x: 3.5,
    y: 8.5,
    r: 3,
    fill: "blue",
  },
  {
    x: 2,
    y: 5,
    r: 5,
    fill: "yellow",
  },
  {
    x: 9,
    y: 6,
    r: 6,
    fill: "orange",
    x: 6,
    y: 2,
    r: 4,
    fill: "green",
  },
];

const scScale = d3.scaleLinear().domain([0, 10]).range([0, width]);

const scXAxis = d3.axisTop().scale(scScale);
const scYAxis = d3.axisLeft().scale(scScale);

const scSvgElement = d3
  .select("#scatter_Chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.bottom},${margin.left})`);
const scXAisGroup = scSvgElement.append("g").call(scXAxis);
const scYAisGroup = scSvgElement.append("g").call(scYAxis);

const scCircleElement = scSvgElement
  .append("g")
  .selectAll("circle")
  .data(myChartData)
  .enter()
  .append("circle")
  .attr("cx", (d) => scScale(d.x))
  .attr("cy", (d) => scScale(d.x))
  .attr("r", (d) => d.r)
  .attr("fill", (d) => d.fill);
