console.log("d3 axis");

// let myScale = d3.scaleLinear().domain([0, 10]).range([0, 200]);

// let myAxis = d3.axisBottom().scale(myScale);

// let mySvg = d3
//   .select(".root")
//   .append("svg")
//   .attr("width", "200")
//   .attr("height", "200");

// let myAxisGroup = mySvg.append("g").call(myAxis);

// Using d3 margin convention

const margin = { top: 50, right: 50, bottom: 50, left: 50 };

const width = 300 - margin.left - margin.right;
const height = 300 - margin.top - margin.bottom;

const myScale = d3.scaleLinear().domain([0, 15]).range(0, width);

const myAxis = de.axisBotton().scale(myScale);
