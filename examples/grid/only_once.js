---
layout: example
title: "Only once"
description: "Only use each grid module once"
---

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600,
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

// First make a copy of the modules array in the grid
var modules = grid.modules.slice();

// Then shuffle the copy of the array so the modules are
// not in order.
modules = _.shuffle(modules);

for(var i = 0; i < 9; i++) {

  var module = modules.shift();

  var myText = r.text(i, 0, 50).fontSize(50)
  module.add(myText);
}

r.draw();