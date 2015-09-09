---
layout: example
title: "Modular grid"
description: "How to create a modular grid system."
---

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

// Create a rectangle to fill the entire screen
// and a smaller rectangle on top
var grid = r.grid({
  x: 50,
  y: 50,
  width: r.width - 100,
  height: r.height - 100,
  gutter: 20,
  columns: 3,
  rows: 3
});

var size = 40;

for(var i = 0; i < 50; i++)
{
  var color = new Rune.Color(Rune.random(0, 255), Rune.random(0, 255), Rune.random(0, 255));
  var x = Rune.random(size, grid.vars.moduleWidth - size);
  var y = Rune.random(size, grid.vars.moduleHeight - size);
  var circle = r.circle(x, y, size).fill(color).stroke(false);

  // we use .ceil because numbers start at 1
  var randomCol = Math.ceil(Rune.random(grid.vars.columns));
  var randomRow = Math.ceil(Rune.random(grid.vars.rows));
  grid.add(circle, randomCol, randomRow);
}

r.draw();