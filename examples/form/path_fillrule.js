---
layout: example
title: "Path fill rules"
description: "Shows the two fillrules you can use to subtract paths from each other"
---

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 450
});

var shape1 = r.path(100, 100)
  .lineTo(200, 0)
  .lineTo(200, 200)
  .lineTo(0, 200)
  .closePath()
  .moveTo(50, 50)
  .lineTo(140, 50)
  .lineTo(140, 140)
  .lineTo(50, 140)
  .closePath()
  .moveTo(150, 150)
  .lineTo(240, 150)
  .lineTo(240, 240)
  .lineTo(150, 240)
  .closePath();

var shape2 = shape1
  .copy()
  .move(450, 100)
  .fillRule("evenodd");

r.draw();