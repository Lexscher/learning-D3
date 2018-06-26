console.log("You're awesome!");

let svg = d3
  .select("#chart-area")
  .append("svg")
  .attr("width", 500)
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

let text = svg
  .append("text")
  .attr("x", 250)
  .attr("y", 200)
  .attr("font-size", 20)
  .attr("font-family", "IM Fell English SC, serif")
  .attr("fill", "#fce9f0");

let line = svg
  .append("line")
  .attr("x1", 175)
  .attr("y1", 230)
  .attr("x2", 230)
  .attr("y2", 40)
  .attr("stroke", "#66ccff")
  .attr("stroke-width", 10);

let ellipese = svg
  .append("ellipse")
  .attr("cx", 315)
  .attr("cy", 330)
  .attr("rx", 130)
  .attr("ry", 10)
  .attr("fill", "#66ccff");

let path = svg
  .append("path")
  .attr("d", "M20 80 C 140 10, 95 10, 95 80 S 150 50, 180 80")
  .attr("stroke", "#fff")
  .attr("fill", "transparent");
