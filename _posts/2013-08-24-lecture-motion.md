---
layout:     [default, slides]
title:      Motion
date:       2013-08-24 19:15:22
categories: printing-code
---

Motion in Graphic Design
========================

In this class we'll investigate what happens when we use motion or animation techniques to create flat, 2D designs.

I've been exploring this in my own work. Here's a simple, generative logo made with the physics library Box2D.

{% vimeo 9513121 %}

Here's an image of a series of graphic prints created with randomized, moving arcs.

{% picture tiny_artist1-a10ccd96b7a467388812f8e45bc9a1f9.jpg %}


Draw loop in Rune.js
--------------------

This is the way you would do it in Processing. DO NOT DO THIS!

[See example code](../examples/motion/draw_loop_wrong/index.html)

Here's a quick example of how to animate using the draw loop in Rune.js.

[See example code](../examples/motion/draw_loop_right/index.html)

Here's an animation example that reuses the same shapes.

[See example code](../examples/motion/reuse_shapes/index.html)

Here's an animation example that deletes shapes when they are not needed anymore.

[See example code](../examples/motion/delete_shapes/index.html)


Tweenlite
---------

This is a completely different way of thinking about animation, without using the draw loop. Here's a example of how to do a simple animation.

[See example code](../examples/motion/tweenlite_simple/index.html)

TweenLite is very powerful. For example, it has a bunch of different [easings](https://greensock.com/docs/#/HTML5/GSAP/Easing/) and other settings.

[See example code](../examples/motion/tweenlite_advanced/index.html)


TimelineLite
------------

Can be used to create sequences of animations.

[See example code](../examples/motion/timelinelite/index.html)
