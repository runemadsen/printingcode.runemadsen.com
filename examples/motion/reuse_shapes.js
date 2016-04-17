---
layout: example
title: "Reuse shapes"
description: "Reusing shapes when they go across the screen"
---

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600
});

var rects = [];

// First, let's create ten rectangles at random positions on the screen.
for(var i = 0; i < 10; i++) {
  var x = Rune.random(r.width);
  var y = Rune.random(r.height);
  var myRect = r.rect(x, y, 20, 20)
    .stroke(false)
    .fill(30);
  rects.push(myRect);
}

r.on('draw', function() {

  // loop through all the rectangles
  for(var i = 0; i < rects.length; i++) {

    // move the rectangle
    rects[i].move(1, 0, true);

    // if the rectangle is outside the screen, reset back to beginning
    if(rects[i].vars.x > r.width) {
      rects[i].move(-50, Rune.random(r.height));
    }
  }

});

r.play();
