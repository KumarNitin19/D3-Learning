console.log("Weather Report");

const cityData = [
  {
    id: 1,
    area: "Mungeshpur, Delhi",
    temprature: 53,
  },
  {
    id: 2,
    area: "Phalodi, Rajasthan",
    temprature: 51,
  },
  {
    id: 3,
    area: "Sirsa, Haryana",
    temprature: 50.3,
  },
  {
    id: 4,
    area: "Gwalior, Madhya Pradesh",
    temprature: 48,
  },
  {
    id: 5,
    area: "Narela, Delhi",
    temprature: 47.9,
  },
  {
    id: 6,
    area: "Rohtak, Haryana",
    temprature: 47.7,
  },
  {
    id: 7,
    area: "Churu, Rajasthan",
    temprature: 47.4,
  },
  {
    id: 8,
    area: "Bikaner, Rajasthan",
    temprature: 47,
  },
  {
    id: 9,
    area: "Jagdhishpur, Haryana",
    temprature: 46.5,
  },
  {
    id: 10,
    area: "Sri Ganganagar, Rajasthan",
    temprature: 46,
  },
];

const width = 500;
const height = 500;

const margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
};

const xAxisScale = d3.scaleLinear().domain([0, 100]).range([0, 400]);
const yAxisScale = d3.scaleLinear().domain([0, 10]).range([0, 400]);

const svgViewPort = d3
  .select("#root")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const groupElement = svgViewPort
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

const circleGroup = groupElement
  .append("g")
  .selectAll("circle")
  .data(cityData)
  .enter()
  .append("circle");

circleGroup
  .attr("cx", (d) => xAxisScale(d.temprature))
  .attr("cy", (d) => yAxisScale(d.id))
  .attr("r", (d) => 20 - d.id * 1.5)
  .attr("fill", (d) => {
    if (d.temprature > 50) return "red";
    if (d.temprature > 47) return "orange";
    return "yellow";
  });

const xAxis = d3.axisTop().scale(xAxisScale);
const yAxis = d3.axisLeft().scale(yAxisScale);
groupElement.append("g").call(xAxis);
groupElement.append("g").call(yAxis);

const textElemnt = groupElement
  .append("g")
  .selectAll("text")
  .data(cityData)
  .enter()
  .append("text");

textElemnt
  .attr("x", (d) => xAxisScale(d.temprature) + 20)
  .attr("y", (d) => yAxisScale(d.id))
  .attr("font-size", "12")
  .text((d) => d.area)
  .attr("fill", (d) => {
    if (d.temprature > 50) return "red";
    if (d.temprature > 47) return "orange";
    return "yellow";
  });
