---
layout: example
title: "Delete shapes"
description: "Delete shapes when they are not needed anymore"
---

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600
});

var circs = [];

r.on('draw', function(frame) {

  console.log('Number of circles: ', circs.length);

  // create a new circle every 40 frames
  if(frame.frameCount % 40 == 0) {

    var circ = r.circle(r.width/2, r.height/2, 1)
      .stroke(false)
      .fill(Rune.random(30, 200));

    circs.push(circ)

  }

  // grow all circles in size
  for(var i = 0; i < circs.length; i++) {
    circs[i].vars.radius += 1;
  }

  // iterate backwards through array and remove any circles
  // bigger than the screen.
  for(var i = circs.length-1; i >= 0; i--) {
    if(circs[i].vars.radius > 600) {

      // remove from stage
      circs[i].removeParent();

      // remove from array
      circs.splice(i, 1);
    }
  }

});

r.play();
