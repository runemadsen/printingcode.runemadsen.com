---
layout:     [default, slides]
title:      Form 2
date:       2013-08-24 19:15:22
categories: printing-code
---

Complex shapes
==============

Now that we know about basic shapes, how do we approach creating more complex shapes in code?

### beginShape() and endShape()

Polygons can be created in Processing using the beginShape() and endShape() methods. Some of you may already know about it, but it's important to me that you really understand the different vertex functions.

You call beginShape() when starting a new shape, then you call any of the vertex functions to create the points on the outline of a shape, and then call endShape() to close the shape.

There are three different methods for adding outline points within a shape. The assignment this week will concentrates on the use of these.

### vertex()

Points created with the vertex() function always connect to the next point in a straight line. This can be used for e.g. drawing a house.

{% picture vertex-8685fff2c261e620156b9786a2a41f62.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/form/vertex)

### curveVertex()
    
Points created with the curveVertex() function will draw a curved line, guided by the point before it and after it. This means that you need a minimum of 4 points to show a single curve, as the first and last point will always be invisible. In this sketch I add 3 to the vertex loop to continue the vertex on top of points already on the line, in order to draw enough guiding points for the circle to complete.

{% picture curvevertex-45064528217a32891ed8b972325a43da.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/form/curve_vertex_circle)

### bezierVertex()

The bezierVertex function is by far the most flexible of the 3 vertex functions, as it draws points using bezier curves. Most people have a faint idea of how bezier curves work, but let's take a deeper look on how to draw things with Bezier curves.

Bezier curves are essential to computational form, as it's the way most visual programming languages, as well as software tools like Photoshop and Illustrator (with the Pen tool), approach the drawing of complex polygons. It's native to the design process of everything from font design to the design of cars.

Although invented by the mathematician Paul de Casteljau, bezier curves got their name from Pierre Bézier who first used these curves in early CAD programs to design cars for Renault.

There are many different kinds of bezier curves (linear, quadratic, cubic), but we'll focus on cubic beziers, as it's the implementation of bezier curves used in Processing.

{% picture bezier_explain-357d366aa27c09e5dea8d7981248dced.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/form/bezier_vertex)

A bezier curve is a formula that describes how to draw a line from one point to another, using 2 control points. The two control points determine the curve of the line going to that specific point. In Processing, you always start a shape with a simple vertex point, and then draw bezierVertex points after it.

It can be hard to understand how these two control points tell the line to curve like that. This animation shows how the curve of the line is calculated by doing simple vector math on the anchor points and control points.

<img src="http://assets.runemadsen.com/bezier_movement.gif"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/form/bezier_vertex_movement)

Here's a simple shape created with bezierVertex and vertex.

{% picture wave-5b6fd6e9a41724a3ab83959f6b37fb4e.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/form/beginshape_wave)

By using bezierVertex() you can create complicated shapes in Processing. If you understand how to use it, you can now basically create any shape possible.

Here are some examples with use of more complex forms.

{% picture bass_anatomy_murder-a051820b30f102df340ee1e18045f420.jpg %}

Saul Bass' movie title design is widely know for their simple but very meaningful use of form. Here it's the movie poster for "Anatomy of a Murder".

{% picture bass_golden_arm-7d263948982070f1d3cc40a3753f5c4b.jpg %}

Another movie poster by Saul Bass, using the same simple formula.

{% picture strike_poster-6ae6af152b030d8ef1504f6392f28987.jpg %}

The red shape is a very simple collection of polygon, but it still holds tremendous value in its meaning. 


Sin and Cos
-----------

The easiest way to do a generative shape with repetition is to loop many times and randomly place vertex points between the beginShape() and endShape() functions. This will look something like this:

{% picture beginshape_loop-04f7d1e7ac7c2caa8924605c7a0118df.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/form/beginshape_loop)

However, that's not super useful. Instead, we can use the sin() and cos() functions to create basic and more sophisticated shapes around a center point.

The cos() and sin() functions help us solve a simple question like this:

<blockquote >
How do I find the x and y of a point that is 300 pixels and 33 degrees away from this point?
</blockquote>

The same question is illustrated here.

{% picture sincos-002cd808f42d8a677e1bac0d8b8687b4.jpg %}

To do this we use the sin() and cos() functions. If you pass in a rotation and multiply it with your radius, they will return the x (cos) and y (sin) for the point we're trying to find.

{% picture sincos_example-3bd403077a69dd18fab7ff8ef93aafb7.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/form/sincos_simple)

It's interesting how all the basic shapes (triangle, rectangle, hexagon, circle) can be created with cos() and sin(), just by changing the number of times the for loop runs.

{% picture sincos_allshapes-1f06ca963b569ed464d2ad0a2ca35ad6.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/form/sincos_allshapes)

This can be used to put something on the perimeter of a circle. Now we can go back and try to do that in our placement example:

{% picture placement_calculations.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/form/placement_calculations)

We could easily make the point on the edge move by incrementing the degrees in a draw loop.

If we put this in a loop, we can generate objects with this equation. Let's look closer at how to draw a hexagon:

{% picture hexagon_example-e03d128b137f1b535081b2318e3cc1d7.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/form/sincos_hexagon)

Change a single parameter, and you get another shape:

{% picture hexagon2_example-413ef4476ff710658cd8b933944c0a86.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/form/sincos_hexagon)

Here's another sketch that rotates text around our center:

{% picture sincos_text-26dd2f1bb8d222aca36ea963ec1bf99e.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/form/sincos_text)

And another sketch that varies the radius in every loop to create a wobbly shape:

{% picture sincos_wobbly-b15340f3584d19ebff49c5503ddc43ce.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/form/sincos_wobbly)


Computational vs. Organic Form
------------------------------

When you start to look at these different shapes, you realize that some of them have inherent algorithmic characteristics. Even Michelangelo will be loose if competing with a computer in drawing a perfect circle. Changing the size of a circle in code is many times faster than doing it by hand. 

{% picture computational-30d4432614159cdea9f0b1f5560228df.jpg %}

Other shapes have inherent organic qualities, and are harder to replicate on a computer. You can draw a random line across a piece of paper in less than one second, but it will take much longer to code it with beginShape(). 

{% picture organic-be61515c891c1ae2af6c5ebf749f175a.jpg %}

This poses a series of questions: When working with computational form, should we prefer some shapes to other? How far should we go to simulate organic, human techniques in the digital world? Is this an argument for a new aesthetic?


Project Examples and Code
-------------------------

Using these newly learned techniques we can look at a few advanced projects and try to re-create them in Processing.

{% picture eno_sonnen-1bb6145d30dc6151dcae9bf0640c6de7.jpg %}

Eno Henze is a programming artist from Germany. Here he uses random radius and stroke alpha to create a series of graphic prints.

{% picture eno_sonnen_example-7b2593051cf4959f5e2bdd11c298610e.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/form/henze_sonnen_example)

The same visual can be created with Processing using the simple drawing functions, randomization and for loops.
    
{% picture eno_ambushes-8e5c77b3dd93e5991bd01473796d6535.jpg %}

Another piece by Eno Henze where he uses simple repetition and random form. This is a great example of the power of using random positioning with vertex points within beginShape().

{% picture henze_ambushes_example-ea4c945dc51a54991442dc5e109a37ac.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/form/henze_ambushes_example)

The same visual can be created with Processing and beginShape().