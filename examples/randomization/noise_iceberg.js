---
layout: example
title: "Noise iceberg"
description: "Creating a iceberg-like shape with perlin noise"
---

// This sketch requires you to add Rune.Noise to your HTML page:
// https://github.com/runemadsen/rune.noise.js

var r = new Rune({
  container: "#canvas",
  width: 700,
  height: 500,
  debug: true
});

// draw background
r.rect(0, 0, r.width, r.height).fill(30);

var noise = new Rune.Noise().noiseDetail(4, 0.75);
noise.noiseSeed(3);
var noiseStep = 0;

var iceberg = r.polygon(r.width/2, 100);

for(var degree = 0; degree <= 180; degree += 3) {

  var x = Math.cos(Rune.radians(degree)) * 200;
  var y = Math.sin(Rune.radians(degree)) * 200;

  if(degree > 10 && degree < 170) {
    y += noise.get(noiseStep) * 150;
  }

  iceberg.lineTo(x, y);

  noiseStep += 0.04;
}

r.draw();
