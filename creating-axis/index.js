console.log("d3 axis");

let myScale = d3.scaleLinear().domain([0, 10]).range([0, 200]);

let myAxis = d3.axisBottom().scale(myScale);

let mySvg = d3
  .select(".root")
  .append("svg")
  .attr("width", "200")
  .attr("height", "200");

let myAxisGroup = mySvg.append("g").call(myAxis);
