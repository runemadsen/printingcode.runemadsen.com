---
layout: example
title: "Random color from array"
description: "Returning a random color from an array of color objects."
---

var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 400,
  debug: true
});

// build array of colors
var colorlist = [
  new Rune.Color(255, 0, 0),
  new Rune.Color(0, 255, 0),
  new Rune.Color(0, 0, 255),
  new Rune.Color(100, 0, 255),
  new Rune.Color(0, 100, 255),
  new Rune.Color(255, 100, 0),
  new Rune.Color(255, 0, 100),
  new Rune.Color(100, 255, 0),
  new Rune.Color(0, 255, 100)
]

function randomColor() {
  var index = Math.round(Rune.random(colorlist.length-1));
  return colorlist[index];
}

// Draw the color scheme
var square1 = r.rect(0, 0, 200, r.height).fill(randomColor()).stroke(false);
var square2 = square1.copy().move(200, 0).fill(randomColor());
var square3 = square1.copy().move(400, 0).fill(randomColor());

r.draw();