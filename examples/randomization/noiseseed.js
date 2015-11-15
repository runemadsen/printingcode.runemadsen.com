---
layout: example
title: "Noise seed"
description: "Using noiseseed to control the starting position of the noise"
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

var noise = new Rune.Noise();
var xStep = 15;

// Without noiseseed
// -------------------------------------------------------

for(var i = 0; i < 5; i++) {

  var noisePath = r.path(0, 30 + (i * 30))
    .stroke(255)
    .fill(false)
    .strokeWidth(2);

  var noiseStep = 0;

  for(var x = 0; x < r.width; x += xStep) {
    var y = noise.get(noiseStep) * 100;
    noisePath.lineTo(x, y);

    noiseStep += 0.1;
  }
}

// With noiseseed
// -------------------------------------------------------

for(var i = 0; i < 5; i++) {

  noise.noiseSeed(Rune.random(100));

  var noisePath = r.path(0, 270 + (i * 30))
    .stroke(255)
    .fill(false)
    .strokeWidth(2);

  var noiseStep = 0;

  for(var x = 0; x < r.width; x += xStep) {
    var y = noise.get(noiseStep) * 100;
    noisePath.lineTo(x, y);

    noiseStep += 0.1;
  }
}

r.draw();
