---
layout: example
title: "Draw loop (WRONG!)"
description: "Do not do this in a scene graph library"
---

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600
});

var x = 0;

r.on('draw', function() {
  r.rect(0, 0, r.width, r.height).stroke(false).fill(255);
  r.rect(x, r.height/2, 50, 50).stroke(false).fill(30);
  x++;
});

r.play();
