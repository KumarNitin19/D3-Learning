console.log("heat map");

const drawContributionMap = () => {
  const testData = [];

  for (let i = 1; i < 100; i++) {
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const randomDay = Math.floor(Math.random() * 28) + 1;
    const randomNumb = Math.floor(Math.random() * 10);
    const createdDate = new Date(`2018-${randomMonth}-${randomDay}`);

    if (testData.filter((x) => x.date == createdDate).length > 0) continue;

    testData.push({
      date: createdDate,
      numb: randomNumb,
    });
  }

  //creating tooltip
  const div = d3
    .select("body")
    .append("div")
    .classed("tooltip", true)
    .style("opacity", 0);

  const height = 300;
  const width = 900;
  const padding = 50;

  const svg = d3
    .select("#contribution-map")
    .append("svg")
    .attr("height", height)
    .attr("width", width);

  const g = svg
    .append("g")
    .style("transform", `translate(${padding}px, ${padding}px)`);

  const today = new Date();

  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  const cellSize = (width - padding * 2) / 53;

  //setting positions of the ticks to be halfway between boundaries
  const yAxisRange = [];
  for (let i = 1; i < 7; i += 2) {
    yAxisRange.push(cellSize / 2 + cellSize * i);
  }

  const yAxis = d3
    .scaleOrdinal()
    .range(yAxisRange)
    .domain(["Mon", "Wed", "Fri"]);
  const xAxis = d3
    .scaleTime()
    .range([0, width - padding * 2])
    .domain([oneYearAgo, today]);

  const xAxisLine = g
    .append("g")
    .style("transform", `translate(0px, -30px)`)
    .call(d3.axisBottom(xAxis));

  const yAxisLine = g
    .append("g")
    .style("transform", `translate(-${cellSize}px, 0px)`)
    .classed("y-axis", true)
    .call(d3.axisLeft(yAxis));

  //adding extra ticks for Tuesday and Thursday
  for (let y = 0; y < 2; y++) {
    let g = yAxisLine
      .append("g")
      .classed("tick", true)
      .attr(
        "transform",
        `translate(0, ${cellSize * (2 + 2 * y) + cellSize / 2})`
      )
      .attr("opacity", 1);
    g.append("line").attr("x2", -4).attr("stroke", "#000");
  }

  const rect = g
    .selectAll("rect")
    .data((d) => d3.timeDays(oneYearAgo, today))
    .enter()
    .append("rect")
    .attr("fill", "black")
    .attr("width", cellSize)
    .attr("height", cellSize)
    .attr("x", function (d) {
      //gets num weeks between one year ago and date of current rect
      return (
        d3.timeWeek.count(oneYearAgo, d) * cellSize +
        d3.timeWeek.count(oneYearAgo, d) * 4
      );
    })
    .attr("y", function (d) {
      return d.getDay() * cellSize + d.getDay() * 4;
    })
    .attr("rx", "4px")
    .style("opacity", 0.05)
    .on("mouseover", function (d) {
      let text = this.getAttribute("data-info");
      if (!text) text = "0 contributions.";
      div
        .html(text)
        .style("left", d3.event.pageX + "px")
        .style("top", d3.event.pageY - 32 + "px");
      div.transition().duration(100).style("opacity", 1);
    })
    .on("mouseout", (d) => {
      div.transition().duration(100).style("opacity", 0);
    });

  //adding colours
  const maxMin = d3.extent(testData, (x) => x.numb);
  const maxVal = d3.max(testData, (d) => d.numb);
  //   const colours = new Array(5).fill("abc").map((x, i) => {
  //     const per = (x * 100) / maxVal;
  //     console.log(maxVal, per, x);
  //     return `hsl(126, ${per}%, 50%)`;
  //   });

  //   const colourScale = d3.scaleQuantize().domain(maxMin).range(colours);

  testData.forEach((entry) => {
    const indiv = rect.filter(
      (d) =>
        d.getDate() == entry.date.getDate() &&
        d.getMonth() == entry.date.getMonth()
    );
    indiv
      .attr("fill", (d) => {
        const per = (entry?.numb * 100) / maxVal;
        return per ? `hsl(126, ${per}%, 50%)` : "#000";
      })
      .style("opacity", (d) => (entry?.numb ? 1 : 0.05))
      .attr("data-info", `${entry.numb} contributions.`);
  });
};

drawContributionMap();
