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
  height: 400,
  debug: true
});

// draw background
r.rect(0, 0, r.width, r.height).fill(30);

var noise = new Rune.Noise().noiseDetail(0.2);
var numPoints = 60;
var pointDegree = 360 / numPoints;
var radius = 150;
var noiseStep = 0;

var noiseCircle = r.polygon(r.width/2, r.height/2)
  .stroke(255)
  .fill(false)
  .strokeWidth(2);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 30) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(x, y);
  noiseStep += 0.1;
}

r.draw();
