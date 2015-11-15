---
layout: example
title: "Random vs. Perlin noise"
description: "Showing the difference between random and perlin noise"
---

// This sketch requires you to add Rune.Noise to your HTML page:
// https://github.com/runemadsen/rune.noise.js

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 500,
  debug: true
});

// draw background
r.rect(0, 0, r.width, r.height).fill(30);

var xStep = 15;

// Rune.Random
// -------------------------------------------------------

var randomPath = r.path(0, 100)
  .stroke(255)
  .fill(false)
  .strokeWidth(2);

for(var x = 0; x < r.width; x += xStep) {
  var y = Rune.random(100);
  randomPath.lineTo(x, y);
}

// Rune.Noise
// -------------------------------------------------------

var noise = new Rune.Noise();

var noisePath = r.path(0, 300)
  .stroke(255)
  .fill(false)
  .strokeWidth(2);

var noiseStep = 0;

for(var x = 0; x < r.width; x += xStep) {
  var y = noise.get(noiseStep) * 100;
  noisePath.lineTo(x, y);

  noiseStep += 0.1;
}

r.draw();
