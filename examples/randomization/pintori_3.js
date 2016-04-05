---
layout: example
title: "Pintori 3"
description: "A full implementation of Giovanni Pintori's design using randomization and colors"
---

// This sketch requires you to add Rune.Noise to your HTML page:
// https://github.com/runemadsen/rune.noise.js

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800
});

// Create colors
// -------------------------------------

var colors = [
  [ new Rune.Color('hsv', 0, 100, 30), new Rune.Color('hsv', 0, 92, 61), new Rune.Color('hsv', 0, 96, 85) ],  // reds
  [ new Rune.Color('hsv', 86, 84, 20), new Rune.Color('hsv', 86, 79, 38), new Rune.Color('hsv', 86, 61, 64) ], // greens
  [ new Rune.Color('hsv', 205, 28, 48), new Rune.Color('hsv', 205, 18, 59), new Rune.Color('hsv', 205, 13, 82) ], // blues
  [ new Rune.Color('hsv', 43, 94, 59), new Rune.Color('hsv', 43, 91, 89), new Rune.Color('hsv', 43, 83, 99) ], // yellows
];

// Find random points for the gray line
// -------------------------------------

var noise = new Rune.Noise();
var linePoints = [];
var lineDirections = [];

var x = -300;
var y = 0;

while(x < 1000) {

  // increment x with a random amount
  x += Rune.random(60, 150);

  // use noise to find a y value from 500 to 600.
  y = 500 + (noise.get(x / 150) * 100);

  // push this point into the array
  linePoints.push(new Rune.Vector(x, y));

  // find a direction for this point
  var rad = Rune.radians(Rune.random(-100, -80));
  lineDirections.push(new Rune.Vector(Math.cos(rad), Math.sin(rad)));
}

// Draw shapes based on those points
// -------------------------------------

// loop through each point but the last one
for(var i = 0; i < linePoints.length - 1; i++)
{
  // first find a random height for this rectangle
  var ranHeight = Rune.random(150, 350);

  // then find all the points we need for this rectangle
  var bottomLeft     = linePoints[i];
  var leftDirection  = lineDirections[i];
  var bottomRight    = linePoints[i + 1];
  var rightDirection = lineDirections[i + 1];

  // and calculcate the top points from this
  var topLeft = leftDirection.multiply(ranHeight).add(bottomLeft);
  var topRight = rightDirection.multiply(ranHeight).add(bottomRight);

  // now we want to find the centroid of the four points.
  var poly = r.polygon(0, 0, false)
    .lineTo(bottomLeft.x, bottomLeft.y)
    .lineTo(topLeft.x, topLeft.y)
    .lineTo(topRight.x, topRight.y)
    .lineTo(bottomRight.x, bottomRight.y);

  var centroid = poly.centroid();

  // get a random set of colors. We could do this with weighted random
  // based on the number of times the colors appear in the original.
  var colorset = colors[Math.floor(Rune.random(colors.length))];

  // now draw the triangles to make the real rectangles
  r.triangle(bottomLeft.x, bottomLeft.y, topLeft.x, topLeft.y, centroid.x, centroid.y)
    .fill(colorset[0])
    .stroke(false);

  r.triangle(topLeft.x, topLeft.y, topRight.x, topRight.y, centroid.x, centroid.y)
    .fill(colorset[1])
    .stroke(false);

  r.triangle(bottomRight.x, bottomRight.y, topRight.x, topRight.y, centroid.x, centroid.y)
    .fill(colorset[2])
    .stroke(false);

  // aaaand the line
  r.line(bottomLeft.x, bottomLeft.y, bottomRight.x, bottomRight.y)
    .strokeWidth(2)
    .stroke(0, 0, 0.5);
}

r.draw();
