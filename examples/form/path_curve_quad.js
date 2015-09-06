---
layout: example
title: "Path quad beziers"
description: "A very simple path object drawn using quad curves with a single control point."
---

var r = new Rune({
  container: "#canvas",
  width: 826,
  height: 400,
  debug: true
});

var wave = r.path(250, 140)
  .curveTo(50, -100, 100, 0)
  .curveTo(150, 100, 200, 0)
  .curveTo(250, -100, 300, 0)
  .lineTo(300, 200)
  .lineTo(0, 200)
  .closePath();

r.draw();