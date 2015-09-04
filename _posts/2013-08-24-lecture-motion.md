---
layout:     default
title:      Motion
date:       2013-08-24 19:15:22
categories: printing-code
---

Motion in Graphic Design
========================

In this class we'll investigate what happens when we use motion or animation techniques to create flat, 2D designs.

I've been exploring this in my own work. Here's a simple, generative logo made with the physics library Box2D.

<iframe src="http://player.vimeo.com/video/9513121?title=0&amp;byline=0&amp;portrait=0" width="600" height="338" frameborder="0" > </iframe>

Here's an image of a series of graphic prints created with randomized, moving arcs.

{% picture tiny_artist1-a10ccd96b7a467388812f8e45bc9a1f9.jpg %}


PDF and draw
------------

Now that we're moving into the world of motion and animation, take a look at the pdfexport_loop example that shows you how to export a PDF from the draw loop, and save multiple images from the animation.

[Example on Github](https://github.com/runemadsen/printing-code/tree/master/framework/pdfexport_loop)


Random Frame Saving
-------------------

First, let's look at how we can use millis() to randomize a frame grab.

{% picture millis_example-e873a8be663147209e0a9b68f58a1797.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/motion/millis_example)

Here's an example where we use the same millis() code in a class, with the seed code from the logo class. These are the outputs from running the sketch 5 times.

{% picture millis_movement1-8a82159dfda0663797223d04a7bc4179.png %}

{% picture millis_movement2-bb6510d778f4d976f10e9d296dfb381c.png %}

{% picture millis_movement3-6333031bfdac744123b99b5e544dcbc1.png %}

{% picture millis_movement4-9503a4c6b60492e88a14c22881a99cd7.png %}

{% picture millis_movement5-96414eb462257f91aaf073faeb5b4371.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/motion/millis_movement)


Easings
-------

Here's a simple example of how to create fluent motion with the [Ani easing library](http://www.looksgood.de/libraries/Ani/). Before we dive into it, let's look at the [easing sheet](http://www.looksgood.de/libraries/Ani/Ani_Cheat_Sheet.pdf)

{% picture easings_simple-b1eb675b21a589e879f74781f0916b89.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/motion/easings_simple)

Here's an example creating a repeating bouncing ball with the BOUNCE easing, and the onEnd callback.

{% picture easings_bounce-92ba5f90ac733a5a4fd892c6149e8f2d.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/motion/easings_bounce)

Here's the same example, but using a class and multiple objects created from the class.

{% picture easings_bounces-d0794134db4fb45d8eff3244e20790d6.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/motion/easings_bounces)

You can also chain multiple tweens together, in order to create an animation sequence. 

{% picture easings_bounce-92ba5f90ac733a5a4fd892c6149e8f2d.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/motion/easings_sequence)

Here's a very simple sketch that demonstrates how you could actually use these easings to create a generative, graphic poster.

{% picture easings_poster1-674cc95eeb6f7e05505a6b2552d3bafa.png %}

{% picture easings_poster2-f85f728444c29b44b79b840ecafe0d94.png %}

{% picture easings_poster3-8266d6c1007a2081824f85a8fae8a8dc.png %}

{% picture easings_poster4-b890443f9a05db7a35e0d7cf34985847.png %}

{% picture easings_poster5-1b4b6621e81bdb0a49e2d96c46aecc63.png %}

{% picture easings_poster6-d2ef89a3a87e2c40cbf3d0542d51aeb1.png %}

{% picture easings_poster7-2869702eaf5e2e3fa293c0ecd0680d4d.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/motion/easings_poster)

If you're interested in exploring the different types of easings, this sketch will visualize all of them for you.

{% picture easings_viewer-ad7a292c024b547a0a6b1dd0d190a695.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/motion/easings_viewer)

You can check out all the methods on the easings library by visiting the [Javadocs](http://www.looksgood.de/libraries/Ani/reference/index.html)

ControlP5
---------

A library related to the concept of motion, is the ControlP5 library. ControlP5 is a Processing library that makes it possible to change variables in your code via UI controls. The library ships with a ton of different examples, but here's a few of our older examples reworked with Control P5.

First of all, here's a very simple background color slider.

{% picture controlp5_simple-a2004f13f30c68f8567a42a9dbbfb9da.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/motion/controlp5_simple)

So what can we use ControlP5 for? Well, here's an example of that cube pattern from the repetition class, where we use the controls to resize the pattern on the fly.

{% picture controlp5_cube-1a51fbd3e22f1b55f9400a0f05b758d8.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/motion/controlp5_cube)

A number of great examples of how to use the library can be found in the library examples folder.

* Save and reload the properties (/examples/controllers/ControlP5properties)
* Create the controls in a separate window (/examples/controllers/ControlP5window)
* Listen to controller events (/examples/use/ControlP5controlEvent)

In every example in /controller, there's also a list of the functions of each UI control.


Physics Libraries
-----------------

One interesting topic is the idea of simulating physics in graphic designs.

{% picture rand_random1-9154154415596c5e1ec92abfdc92b0e2.jpg %}

{% picture rand_random2-8aec7c35ac7aa205d975bec43e4897bd.jpg %}

Daniel Shiffman has made a nice wrapper to the Box2D library (hello Angry Birds!) that makes it easier to use in Processing.

Here's a simple sketch that shows the steps you need to take to create a "world" and some objects in that world.

{% picture physics_simple-4a1b78c2b750f5a6ef9410b55d0028c7.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/motion/physics_simple)

Here we added a boundary to the example.

{% picture physics_bounds-b15bd0a41971a91e89e71e08968eb4fe.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/motion/physics_bounds)

Now that we know how to create a world and make things fall, we can use this in our designs. Here's a sketch that uses the same technique to make a generate circle shape.

{% picture physics_advanced1-5038e53c5cb3bcd55fcefcf34760eea4.png %}

{% picture physics_advanced2-80f3d8257e3a01b0b47ce961f4e7e3f2.png %}

{% picture physics_advanced3-3a4b43e703e65203beeb199b21c6b3dd.png %}

{% picture physics_advanced4-05c8d093637713913b3f729f985cf8df.png %}

{% picture physics_advanced5-041e541024b506cfdb570aecc6f3fa93.png %}

{% picture physics_advanced6-9e6506c067de18cf32efe14df5b3abdd.png %}

{% picture physics_advanced7-e2076c9d9bc42c93d039c0a588e59da3.png %}

{% picture physics_advanced8-564566b9b4a012343f9881b9b61617be.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/motion/physics_advanced)