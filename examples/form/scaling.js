---
layout: example
title: "Scaling"
description: "Shows how to scale shapes and groups"
---

var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 350
});

var myRect = r.rect(100, 50, 100, 50);
var myScaledRect = myRect.copy().scale(2).move(120, 0, true);

var myGroup = r.group(100, 200);
r.rect(0, 0, 100, 50, myGroup);
r.circle(80, 30, 20, myGroup);
var myScaledGroup = myGroup.copy().scale(2).move(120, 0, true);

r.draw();
