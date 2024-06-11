console.log("Scatter Plot Graph");

const scatterPlotDataUrl =
  "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv";

const margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
};

const width = 960 + margin.left - margin.right;
const height = 500 + margin.top - margin.bottom;

const x = d3.scaleLinear().range([0, width]);
const y = d3.scaleLinear().range([height, 0]);

const xAxis = d3.axisBottom().scale(x);
const yAxis = d3.axisLeft().scale(y);

const color = d3.scaleOrdinal(d3.schemeCategory10);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

d3.csv(
  scatterPlotDataUrl,
  function (d) {
    return {
      grLivArea: +d.GrLivArea,
      salePrice: +d.SalePrice,
    };
  },
  function (data) {
    x.domain([0, 4000]);
    y.domain([0, 500000]);

    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0,${height})`)
      .call(xAxis)
      .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .attr("text-anchor", "end")
      .text("GRliveArea");

    svg
      .append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("class", "label")
      .attr("transform", `rotate(-90)`)
      .attr("y", 6)
      .attr("dy", ".71em")
      .text("Sale Price");

    svg
      .selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("r", "3.5")
      .attr("cx", (d) => x(d.grLivArea))
      .attr("cy", (d) => y(d.salePrice))
      .attr("fill", (d) => color(d.speices));

    const legend = svg
      .selectAll(".legend")
      .data(color.domain())
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, index) => `translate(0,${index * 20})`);

    legend
      .append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .attr("fill", color);

    legend
      .append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text("Scatter Plot");
  }
);
