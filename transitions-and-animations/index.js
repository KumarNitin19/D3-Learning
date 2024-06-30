console.log("Transitions and Animations");

d3.select("#rect")
  .append("svg")
  .attr("height", 200)
  .attr("width", 300)
  .style("border", "1px solid black")
  .append("rect")
  .attr("class", "rect_shape")
  .attr("x", 10)
  .attr("y", 10)
  .attr("height", 50)
  .attr("width", 50)
  .attr("fill", "red");

const rectButton = document.getElementById("rect_button");
rectButton.addEventListener("click", () => {
  d3.select(".rect_shape")
    .transition()
    .duration(2000)
    .attr("x", 240)
    .attr("y", 140);
});

d3.select("#circle")
  .append("svg")
  .attr("height", 200)
  .attr("width", 300)
  .style("border", "1px solid")
  .append("circle")
  .attr("class", "circle_shape")
  .attr("cx", 150)
  .attr("cy", 100)
  .attr("r", 50)
  .attr("fill", "red");

const circleButton = document.getElementById("circle_button");
circleButton.addEventListener("click", () => {
  d3.select(".circle_shape").transition().duration(2000).attr("r", 80);
});

d3.select("#ellipse")
  .append("svg")
  .attr("width", 300)
  .attr("height", 200)
  .style("border", "1px solid")
  .append("ellipse")
  .attr("class", "ellipse_shape")
  .attr("cx", 150)
  .attr("cy", 100)
  .attr("rx", 75)
  .attr("ry", 50)
  .attr("fill", "red");

const ellipseButton = document.getElementById("ellipse_button");
ellipseButton.addEventListener("click", () => {
  d3.select(".ellipse_shape")
    .transition()
    .duration(2000)
    .attr("rx", 100)
    .attr("ry", 75);
});

d3.select("#line")
  .append("svg")
  .attr("width", 300)
  .attr("height", 200)
  .style("border", "1px solid")
  .append("line")
  .attr("class", "line_shape")
  .attr("x0", 10)
  .attr("y0", 10)
  .attr("x1", 30)
  .attr("y1", 30)
  .attr("stroke", "red")
  .attr("stroke-width", 2);

const lineButton = document.getElementById("line_button");

lineButton.addEventListener("click", () => {
  d3.select(".line_shape")
    .transition()
    .duration(2000)
    .attr("x1", 290)
    .attr("y1", 190);
});
