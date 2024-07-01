console.log("Stacked bar chart using stack layout");

const chartData = [
  {
    season: "spring",
    apple: "1",
    kiwi: "4",
    grape: "1",
  },
  {
    season: "summer",
    apple: "2",
    kiwi: "1",
    grape: "2",
  },
  {
    season: "fall",
    apple: "3",
    kiwi: "3",
    grape: "1",
  },
  {
    season: "winter",
    apple: "2",
    kiwi: "3",
    grape: "2",
  },
];

const margin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30,
};

const width = 960 - margin.right - margin.left;
const height = 500 - margin.top - margin.bottom;

const seasonNames = chartData.map((d) => d.season);
const fruitNames = d3.keys(chartData[0]).filter((d) => d !== "season");
console.log(fruitNames);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);
