console.log("Stacked to group bar chart");

const n = 5;
const m = 58;

const margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
};

const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const xz = d3.range(m);
const yz = d3.range(n).map(() => bumps(m));

const y01z = d3
  .stack()
  .keys(d3.range(n))(d3.transpose(yz))
  .map((data, i) => data.map(([y0, y1]) => [y0, y1, i]));

const yMax = d3.max(yz, (y) => d3.max(y));
const y1Max = d3.max(y01z, (y) => d3.max(y, (d) => d[1]));

const x = d3.scaleBand().domain(xz).rangeRound([0, width]).padding(0.08);
const y = d3.scaleLinear().domain([0, y1Max]).range([height, 0]);

const xAxis = d3
  .axisBottom()
  .scale(x)
  .tickSizeOuter(0)
  .tickFormat(() => "");

const color = d3
  .scaleSequential(d3.interpolatePuBu)
  .domain([-0.5 * n, 1.5 * n]);

const svg = d3
  .select("#root")
  .append("svg")
  .attr("height", height + margin.top + margin.bottom)
  .attr("width", width + margin.left + margin.right)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

const rect = svg
  .selectAll("g")
  .data(y01z)
  .enter()
  .append("g")
  .attr("fill", (d, i) => color(i))
  .selectAll("rect")
  .data((d) => d)
  .join("rect")
  .attr("x", (d, i) => x(i))
  .attr("y", height)
  .attr("height", 0)
  .attr("width", x.bandwidth());

svg.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);

function transitionGrouped() {
  y.domain([0, yMax]);

  rect
    .transition()
    .duration(500)
    .delay((d, i) => i * 7)
    .attr("x", (d, i) => x(i) + (x.bandwidth() / n) * d[2])
    .attr("width", x.bandwidth() / n)
    .transition()
    .attr("y", (d, i) => y(d[1] - d[0]))
    .attr("height", (d) => y(0) - y(d[1] - d[0]));
}

function transitionStacked() {
  y.domain([0, y1Max]);

  rect
    .transition()
    .duration(500)
    .delay((d, i) => i * 7)
    .attr("y", (d) => y(d[1]))
    .attr("height", (d) => y(d[0]) - y(d[1]))
    .transition()
    .attr("x", (d, i) => x(i))
    .attr("width", x.bandwidth());
}

transitionStacked();

const timeout = setTimeout(() => {
  transitionGrouped();
  clearTimeout(timeout);
}, 2000);

// function for creating fake data
function bumps(m) {
  const values = [];

  // Initialize with uniform random values in [0.1, 0.2).
  for (let i = 0; i < m; ++i) {
    values[i] = 0.1 + 0.1 * Math.random();
  }

  // Add five random bumps.
  for (let j = 0; j < 5; ++j) {
    const x = 1 / (0.1 + Math.random());
    const y = 2 * Math.random() - 0.5;
    const z = 10 / (0.1 + Math.random());
    for (let i = 0; i < m; i++) {
      const w = (i / m - y) * z;
      values[i] += x * Math.exp(-w * w);
    }
  }

  // Ensure all values are positive.
  for (let i = 0; i < m; ++i) {
    values[i] = Math.max(0, values[i]);
  }

  return values;
}
