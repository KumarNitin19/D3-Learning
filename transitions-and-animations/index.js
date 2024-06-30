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
