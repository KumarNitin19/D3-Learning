console.log("Weather Report");

const cityData = [
  {
    id: 0,
    area: "Mungeshpur, Delhi",
    temprature: 53,
  },
  {
    id: 1,
    area: "Phalodi, Rajasthan",
    temprature: 51,
  },
  {
    id: 2,
    area: "Sirsa, Haryana",
    temprature: 50.3,
  },
  {
    id: 3,
    area: "Gwalior, Madhya Pradesh",
    temprature: 48,
  },
  {
    id: 4,
    area: "Narela, Delhi",
    temprature: 47.9,
  },
  {
    id: 5,
    area: "Rohtak, Haryana",
    temprature: 47.7,
  },
  {
    id: 6,
    area: "Churu, Rajasthan",
    temprature: 47.4,
  },
  {
    id: 7,
    area: "Bikaner, Rajasthan",
    temprature: 47,
  },
  {
    id: 8,
    area: "Jagdhishpur, Haryana",
    temprature: 46.5,
  },
  {
    id: 9,
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

const xAxisScale = d3.scaleLinear().domain([0, 50]).range([0, 400]);
const yAxisScale = d3.scaleLinear().domain([0, 20]).range([0, 400]);

const svgViewPort = d3
  .select("#root")
  .append("svg")
  .attr("width", width - margin.left - margin.right)
  .attr("height", height - margin.top - margin.bottom);

const circleGroup = svgViewPort
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

const circleElement = circleGroup
  .selectAll("circle")
  .data(cityData)
  .enter()
  .append("circle");

circleElement
  .attr("cx", (d) => xAxisScale(d.temprature))
  .attr("cy", (d) => yAxisScale(d.id))
  .attr("r", (d) => 50 - d.id * 5);
