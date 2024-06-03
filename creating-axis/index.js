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
