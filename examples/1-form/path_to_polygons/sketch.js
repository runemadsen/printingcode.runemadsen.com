var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 800,
  frameRate: 24
});

// make a polygon as a rectangle
var path = r.path(200, 200)
  .lineTo(300, 0)
  .lineTo(300, 300)
  .lineTo(0, 300)
  .closePath()
  .moveTo(100, 100)
  .lineTo(200, 100)
  .curveTo(200, 250, 100, 250, 100, 100)
  .closePath()
  .fill(false)
  .stroke(0, 0, 0);

var polys = path.toPolygons({ spacing:25 });

for(var i = 0; i < polys.length; i++) {

  var poly = polys[i];
  poly.move(400, 0, true);

  for(var j = 0; j < poly.vars.vectors.length; j++) {
    var vec = poly.vars.vectors[j];
    vec.x += Rune.random(-3, 3);
    vec.y += Rune.random(-3, 3);
    r.circle(poly.vars.x + vec.x, poly.vars.y + vec.y, 5, 5);
  }

}

r.draw();

