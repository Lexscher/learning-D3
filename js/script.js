console.log("You're awesome!");

let data = [25, 20, 10, 12, 15];

let svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", 500)
  .attr("height", 400);

let circles = svg.selectAll("circle").data(data);

circles
  .enter()
  .append("circle")
  .attr("cx", (d, i) => {
    console.log("Item: " + d + ". Index: " + i);
    return i * 50 + 25;
  })
  .attr("cy", 200)
  .attr("r", d => {
    console.log("Item: " + d);
    return d;
  })
  .attr("fill", "#66ccff");
