console.log("Multi series line chart");

const csvUrl =
  "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered.csv";

const margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
};

const height = 500 - margin.top - margin.bottom;
const width = 960 - margin.left - margin.right;
