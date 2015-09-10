---
layout:     [default, slides]
title:      Toxiclibs
date:       2013-08-24 19:15:22
categories: printing-code
---

Toxiclibs
---------

Often when you generate random forms, you need the ability to manipulate the outline of the form. For example, here I generate a line with beginShape using 5 random points

{% picture toxiclibs_splines_1-2fbb9c654b1d7c954b18263f149c3ee3.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/randomization/toxiclibs_splines)

Now, let's say I want to divide that line up into more segments. Toxiclibs ships with a nice Spline class that can do this for you. Here is the exact same code, but using the spline class to get double the points from the same 5 random points.

{% picture toxiclibs_splines_2-f6eaf273ef3a7a01858c257820c65961.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/randomization/toxiclibs_splines)

Here we divide each point into 10 smaller points, with a distance based on the curve of the original 5 points.

{% picture toxiclibs_splines_3-cf23442ea6945096d744b0b0a30f854e.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/randomization/toxiclibs_splines)

You can use the getDecimatedVertices() function to get points with equal distance to each other.

{% picture toxiclibs_splines_4-bae143d4541580f6ea0b50c748bc1d52.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/randomization/toxiclibs_splines)

And with a little bit of fun randomness, we can create a wobbly line from those points.

{% picture toxiclibs_splines_5-f629d64f1aaf9723b28ee749296678d4.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/randomization/toxiclibs_splines)

	Ray2D

	Other - check examples!

There's a ton of interesting features in toxiclibs, and if you're interested, check the "examples" folder.

* toxiclibs perlin noise 3D
* toxiclibs Spline3D
* all other 3D toxiclibs stuff
* USE TOxiclibs mesh class and example: BezierPatchSimple