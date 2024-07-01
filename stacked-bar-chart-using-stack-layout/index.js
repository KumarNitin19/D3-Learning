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

const width = 300 - margin.right - margin.left;
const height = 300 - margin.top - margin.bottom;

const seasonNames = chartData.map((d) => d.season);
const fruitNames = d3.keys(chartData[0]).filter((key) => key !== "season");

chartData.forEach((d) => {
  d.fruitsConsumed = fruitNames.map((name) => ({
    fruitName: name,
    consumedCount: d[name],
  }));
  d.totalFruit = d3.sum(d.fruitsConsumed, (d) => d.consumedCount);
});

const x = d3.scaleBand().domain(seasonNames).range([0, width]).padding([0.2]);
const y = d3
  .scaleLinear()
  .domain([0, d3.max(chartData, (d) => d.totalFruit)])
  .range([height, 0]);

const color = d3
  .scaleOrdinal()
  .domain(fruitNames)
  .range(["#d62728", "#2ca02c", "#9467bd"]);

const xAxis = d3.axisBottom().scale(x).tickSizeOuter(0);
const yAxis = d3.axisLeft().scale(y);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

svg
  .append("g")
  .attr("class", "x axis")
  .attr("transform", `translate(0, ${height})`)
  .call(xAxis);

svg.append("g").attr("class", "y axis").call(yAxis);

const layers = fruitNames.map((name) => {
  return chartData.map((d) => ({
    x: x(d.season),
    y: d[name],
    fruitName: name,
  }));
});

const stack = d3.stack().keys(fruitNames)(chartData);

console.log(stack, layers);

const svgLayer = svg
  .append("g")
  .selectAll(".layer")
  .data(stack)
  .enter()
  .append("g")
  .attr("class", "layer");

svgLayer
  .selectAll("rect")
  .data((d) => d)
  .enter()
  .append("rect")
  .attr("x", (d) => d.x)
  .attr("y", (d) => y(d.y + d.y0))
  .attr("width", x.bandwidth())
  .attr("height", (d) => height - y(d.y))
  .attr("fill", (d) => color(d.fruitName));
