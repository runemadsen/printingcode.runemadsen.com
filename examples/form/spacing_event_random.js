---
layout: example
title: "Spacing: Even and random"
description: "Draws evenly spaced circles on the screen."
---

var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 500
});

var group = r.group(75, 85);

for(var x = 0; x < 5; x++)
  {
    for(var y = 0; y < 4; y++)
    {
      var circ = r.circle(x * 110, y * 110, 35, group)
        .stroke(false);

      // move it a random amount
      circ.move(Rune.random(-20, 20), Rune.random(-20, 20), true);

      if(x == 3 && y == 2)
      {
        circ.fill(23, 141, 50);
      }
      else
      {
        circ.fill(0, 0, 0);
      }
    }
  }

r.draw();