---
layout: example
title: "Random"
description: "SHow how to randomly place circles on the screen."
---

var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 500
});

for(var i = 0; i < 30; i++) {
  r.circle(Rune.random(r.width), Rune.random(r.height), 30);
}

r.draw();