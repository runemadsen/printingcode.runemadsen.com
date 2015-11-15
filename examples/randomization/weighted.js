---
layout: example
title: "Weighted randomness"
description: "Shows how to calculate weighted randomness."
---

var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 400
});

// Define function used to find weights.
function chooseWeighted(opts) {

  // get sum of all the weights. This is where underscore is really great.
  var sum = _.reduce(opts, function(memo, opt) { return memo + opt.weight; }, 0);

  // now pick a random number between 0 and the sum of the weights
  var ran = Rune.random(sum);

  // loop through all the options until you find a weight that is greater
  // or equal to the random number. Subtract weight from random num every time.
  for( var i = 0; i < opts.length; i++){

    var opt = opts[i];

    if(opt.weight >= ran) {
      return opt.value;
    }

    ran -= opt.weight;
  }
}

// call function to find random color based on weight.
var col = chooseWeighted([
  { value: new Rune.Color(255, 0, 0), weight: 4 },
  { value: new Rune.Color(0, 255, 0), weight: 2 },
  { value: new Rune.Color(0, 0, 255), weight: 1 }
]);

// draw rectangle with this color.
r.rect(200, 100, 200, 200)
  .stroke(false)
  .fill(col);

r.draw();
