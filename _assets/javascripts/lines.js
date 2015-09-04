window.linesCode = function sketchProc(p)
{
  p.colors = [
    0xFFBC1D25,
    0xFF7D9645,
    0xFFD87A3A,
    0xFFF9D006,
    0xFF3F2034,
    0xFF0A3F8B
  ]

  p.startVals = _.map([{}, {}, {}], function(val) {
    return { 
      seed:p.random(1000), 
      add_seed:p.random(0.3, 1), 
      start_x:p.random(0, 20), 
      add_x:p.random(30, 100), 
      add_frame:p.random(0.0005, 0.001),
      color: p.colors.splice(Math.floor(p.random(p.colors.length)), 1)[0]
    }
  });

  p.setup = function()
  {
    var parent = $("#lines").parent();
    p.size(parent.width(), 40);
    p.noFill();
    p.background(255);
  }

  p.draw = function() {
    p.background(255);
    
    _.each(p.startVals, function(val) {

      var x = val.start_x;
      var seed = val.seed;
      var steps = Math.round(p.width / val.add_x);

      p.stroke(val.color);
      p.beginShape();
      for(var i = 0; i < steps; i++)
      {
        var y = p.noise(seed) * 50;
        if(i == 0 || i == steps-1) p.vertex(x, y);
        
        p.curveVertex(x, y);
        //p.ellipse(x, y, 3, 3);

        x += val.add_x;
        seed += val.add_seed;
      }
      p.endShape();
      val.seed += val.add_frame;
    });
  }
};