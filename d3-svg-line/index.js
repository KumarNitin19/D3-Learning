console.log("d3 svg line");

const lineData = [
  {
    x: 5,
    y: 30,
  },
  {
    x: 75,
    y: 30,
  },
  {
    x: 75,
    y: 90,
  },
  {
    x: 150,
    y: 90,
  },
  {
    x: 150,
    y: 150,
  },
  {
    x: 190,
    y: 150,
  },
];

const linePathGenerator = d3
  .line()
  .x((d) => d.x)
  .y((d) => d.y)
  .curve(d3.curveBasis);

linePathGenerator(lineData);
