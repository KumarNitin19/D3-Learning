console.log("Graph element with text");

const dataSet = [
  { name: "Mumbai", population: 21, rank: 1 },
  { name: "Delhi", population: 18, rank: 2 },
  { name: "Bengaluru", population: 16, rank: 3 },
  { name: "Hyderabad", population: 11, rank: 4 },
  { name: "Ahemdabad", population: 8, rank: 5 },
  { name: "Lucknow", population: 5, rank: 6 },
];

const svgElement = d3
  .select(".root")
  .append("svg")
  .attr("width", "200")
  .attr("height", "200");

const groupElement = svgElement
  .selectAll("circle")
  .data(dataSet)
  .enter()
  .append("circle")
  .attr("cx", (d) => 200 - d.rank * 25)
  .attr("cy", (d) => 50 + d.rank * 20)
  .attr("r", (d) => d.population)
  .text("text", (d) => d.name)
  .attr("fill", (d) => {
    switch (true) {
      case d.population > 15:
        return "red";
      case d.population > 10:
        return "orange";
      default:
        return "green";
    }
  });
