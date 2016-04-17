---
layout: example
title: "TweenLite advanced"
description: "Animating more properties of shape objects using TweenLite.js"
---

// This example requires you to add TweenLite.js and Easepack.js to your HTML file.

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600
});

// start the circle at the top of the screen
var circ = r.circle(r.width/2, -50, 30)
  .stroke(false)
  .fill(30);

// animate it to the middle of the screen
TweenLite.to(circ.vars, 2, {
  y:r.height/2,
  radius:80,
  delay:2,
  ease: Elastic.easeOut,
  onComplete:finished
});

function finished() {
  console.log("animation finished")
}

r.play();
