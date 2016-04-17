---
layout: example
title: "TimelineLite"
description: "Creating a sequence of tweens using TimelineLite"
---

// This example requires you to add TweenLite.js, Easepack.js and TimelineLite.js to your HTML file.

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600
});

// start the circle at the top of the screen
var circ = r.ellipse(r.width/2, -50, 30, 30)
  .stroke(false)
  .fill(30);

var tl = new TimelineLite({ onComplete: finished });
tl.add( TweenLite.to(circ.vars, 2, { y:r.height/2, ease: Elastic.easeOut, onComplete: function() { circ.rotate(0, r.width/2, r.height/2)} }) );
tl.add( TweenLite.to(circ.vars, 2, { height:300, width: 200, ease: SteppedEase.config(5) }) );
tl.add( TweenLite.to(circ.vars, 1, { rotation:360, ease: Sine.easeInOut }) );

// The timeline has controls too
// tl.pause();
// tl.resume();
// tl.seek(1.5);
// tl.reverse();

function finished() {
  console.log("Reversing timeline")
  tl.reverse();
}

r.play();
