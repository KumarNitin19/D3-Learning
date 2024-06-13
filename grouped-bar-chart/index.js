console.log("Grouped bar chart");

const csvDataUrl =
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_stacked.csv";

const margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
};

const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;
