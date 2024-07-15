console.log("D3 geo path");

const geoPath = d3.geoPath();

const geoPoint = {
  type: "Point",
  coordinates: [-105.01621, 39.57422],
};

console.log(geoPath(geoPoint));
