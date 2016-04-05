---
layout: example
title: "Pintori 2"
description: "A simple implementation of Giovanni Pintori's design using randomization and colors"
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
  [ new Rune.Color('hsv', 0, 85, 22), new Rune.Color('hsv', 0, 80, 77, 0.8) ],  // reds
  [ new Rune.Color('hsv', 85, 84, 20), new Rune.Color('hsv', 85, 79, 38, 0.8) ], // greens
  [ new Rune.Color('hsv', 205, 28, 48), new Rune.Color('hsv', 205, 18, 59, 0.8) ], // blues
  [ new Rune.Color('hsv', 43, 94, 59), new Rune.Color('hsv', 43, 91, 89, 0.8) ], // yellows
];

// Find random points for the gray line
// -------------------------------------

var noise = new Rune.Noise();
var linePoints = [];

var x = -300;
var y = 0;

while(x < 1000) {

  // increment x with a random amount
  x += Rune.random(60, 150);

  // use noise to find a y value from 500 to 600.
  y = 500 + (noise.get(x / 150) * 100);

  // push this point into the array
  linePoints.push(new Rune.Vector(x, y));
}

// Draw shapes based on those points
// -------------------------------------

// loop through each point but the last one
for(var i = 0; i < linePoints.length - 1; i++)
{
  // first find a random height for this rectangle
  var ranHeight = Rune.random(150, 350);

  // then find all the points we need for this rectangle
  var bottomLeft  = linePoints[i];
  var bottomRight = linePoints[i + 1];

  // and calculcate the top points from this
  var topLeft = bottomLeft.sub(new Rune.Vector(0, ranHeight));
  var topRight = bottomRight.sub(new Rune.Vector(0, ranHeight));

  // get a random set of colors. We could do this with weighted random
  // based on the number of times the colors appear in the original.
  var colorset = colors[Math.floor(Rune.random(colors.length))];

  // now draw the triangles to make the real rectangles
  r.triangle(bottomLeft.x, bottomLeft.y, topLeft.x, topLeft.y, topRight.x, topRight.y)
    .fill(colorset[0])
    .stroke(false);

  r.triangle(topLeft.x, topLeft.y, topRight.x, topRight.y, bottomRight.x, bottomRight.y)
    .fill(colorset[1])
    .stroke(false);

  // aaaand the line
  r.line(bottomLeft.x, bottomLeft.y, bottomRight.x, bottomRight.y)
    .strokeWidth(2)
    .stroke(0, 0, 0.5);
}

r.draw();
