---
layout: example
title: "Modulo Star"
description: "Using modulo to draw a star"
---

var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 400,
  debug: true
});

var numPoints = 12;
var pointDegree = 360 / numPoints;

var myPolygon = r.polygon(r.width/2, r.height/2);
for(var i = 0; i < numPoints; i++) {

  var radius = 100;
  if(i % 2 == 0) {
    radius = 50;
  }

  var x = Math.cos(Rune.radians(i * pointDegree)) * radius;
  var y = Math.sin(Rune.radians(i * pointDegree)) * radius;
  myPolygon.lineTo(x, y);
}

r.draw();
