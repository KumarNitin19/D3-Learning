console.log("Line Chart");

const margin = { top: 20, right: 20, bottom: 30, left: 50 };
const height = 960 - margin.top - margin.bottom;
const width = 960 - margin.left - margin.right;

const parseDate = d3.time.format("%d-%b-%y").parse;

const x = d3.time.scale().range([0, width]);
const y = d3.time.scale().range([0, height]);
