---
layout: example
title: "Color circle"
description: "How to draw a color circle using HSV, sin and cos."
---


var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 400,
  debug: true
});

var numColors = 20;
var angle = 360 / numColors;
var radius = 150;

for(var i = 0; i < numColors; i++) {

  var curAngle = i * angle;
  var x = Math.cos(Rune.radians(curAngle)) * radius;
  var y = Math.sin(Rune.radians(curAngle)) * radius;

  r.circle((r.width / 2) + x, (r.height / 2) + y, 20)
    .fill('hsv', curAngle, 80, 90)
    .stroke(false);
}

r.draw();