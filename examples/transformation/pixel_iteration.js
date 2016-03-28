---
layout: example
title: "Pixel iteration"
description: "How to iterate pixels values of an image. Warning slow!"
---

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600,
  debug: true
});

var jpg = new Rune.Pixels("../posters.jpg");
jpg.load(function(err) {

  // loop over the pixels
  for(var x = 0; x < jpg.width; x++) {
    for(var y = 0; y < jpg.height; y++) {

      // find the place in the pixel array
      var index = ((y * jpg.width) + x) * 4;

      // pull out the colors
      var red = jpg.pixels[index];
      var green = jpg.pixels[index + 1];
      var blue = jpg.pixels[index + 2];

      // draw a rectangle
      r.rect(x, y, 1, 1).fill(red, green, blue).stroke(false)
    }
  }

  r.draw();

});
