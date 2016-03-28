---
layout: example
title: "Pixel pattern"
description: "Drawing a pattern using the color values from an image"
---

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600,
  debug: true
});

var jpg = new Rune.Pixels("../posters.jpg");
jpg.load(function(err) {

  var size = 50;

  for(var x = 0; x < r.width; x += size)
  {
    for(var y = 0; y < r.height; y += size)
    {
      // we have to map the x,y values to the width and height
      // of the image.
      var imgX = Math.floor((x / r.width) * jpg.width);
      var imgY = Math.floor((y / r.height) * jpg.height);

      var backColor = jpg.get(imgX, imgY);
      var frontColor = backColor.copy().darken(0.3);

      r.rect(x, y, size, size)
        .fill(backColor)
        .stroke(false);

      r.rect(x + 10, y + 10, size - 20, size - 20)
        .fill(frontColor)
        .stroke(false)
        .rotate(45, x + (size/2), y + (size/2));
    }
  }

  r.draw();

});
