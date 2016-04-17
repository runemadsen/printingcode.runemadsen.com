---
layout: example
title: "Draw loop (RIGHT!)"
description: "This is the way to animate with a draw loop in Rune.js"
---

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600
});

var movingRect = r.rect(0, r.height/2, 50, 50).stroke(false).fill(30);

r.on('draw', function() {
  // move rectangle one pixel relative to current position
  movingRect.move(1, 0, true);
});

r.play();
