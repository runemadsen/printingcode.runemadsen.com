---
layout: example
title: "Polygon to polygon"
description: "Converts a polygon with few points to a polygon with evenly spaced vectors."
---

var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 800,
  frameRate: 24
});

// make a polygon as a rectangle
var poly = r.polygon(200, 200)
  .lineTo(0, 0)
  .lineTo(300, 0)
  .lineTo(300, 300)
  .lineTo(0, 300)
  .fill(false)
  .stroke(0, 0, 0);

var poly2 = poly.toPolygon({ spacing:25 })
  .move(400, 0, true);

for(var i = 0; i < poly2.vars.vectors.length; i++) {
  var vec = poly2.vars.vectors[i];
  vec.x += Rune.random(-5, 5);
  vec.y += Rune.random(-5, 5);

  r.circle(poly2.vars.x + vec.x, poly2.vars.y + vec.y, 5, 5);
}

r.draw();