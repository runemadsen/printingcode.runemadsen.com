---
layout: example
title: "Polygon sin and cos"
description: "Draws a very simple polygon using sin, cos and lineTo."
---

var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 850
});

var radius = 100;
var points = [3, 4, 6, 40];

for(var i = 0; i < points.length; i++) {

  var shape = r.polygon(r.width/2, 125 + (i * 200));
  var spacing = 360/points[i];

  for(var j = 0; j < points[i]; j++) {
    var x = Math.cos(Rune.radians(j * spacing)) * radius;
    var y = Math.sin(Rune.radians(j * spacing)) * radius;
    shape.lineTo(x, y);
  }

}

r.draw();