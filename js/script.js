console.log("You're awesome!");

let svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400);

let circle = svg
  .append("circle")
  .attr("cx", 100)
  .attr("cy", 250)
  .attr("r", 70)
  .attr("fill", "#c6e2ff");

let rectangle = svg
  .append("rect")
  .attr("x", 200)
  .attr("y", 204)
  .attr("width", 200)
  .attr("height", 100)
  .attr("fill", "#ffe4e1");
