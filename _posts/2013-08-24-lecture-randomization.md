---
layout:     default
title:      Randomization
date:       2013-08-24 19:15:22
categories: printing-code
---


Vectors and Randomization
=========================

When we talk about randomization in design, people often think about generative or algorithmic art, where an algorithm spins out of control and splatter thousands of random shapes on a canvas. This is not what this class is about.

The concept of randomization has been an essential tool for graphic designers way before the computer. Although entirely done by hand, random positioning and coloring has been used to create expressive and dynamic designs for a long time. With the computer we have the ability to move beyond simple random shapes and create deisgn systems that are entirely dynamic in nature – code that specficies certain parameters that the algorithm can play within, and where randomization helps create new and exciting outputs within the broader design constraints. In this way of designing, the designer becomes more of a director who sets up the basic constraints of the design, and where the algorithm renders an original design within these constraints every time it runs.

Dynamic logos, generative color schemes, and type systems are all possible because of the simple concept of letting the computer choose a number for you. The aim of this class is to introduce the basic concept of randomization, and to use it for aesthetically pleasing, good designs.


Using Random
------------

One of the first things you learn in Processing, is to use the random() function. Here's a very simple example where I'm choosing a random stroke for 3 circles.

{% picture random_simplest-b95254201f603f9795486a16e68875c5.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/randomization/random_simplest)

But random() can be used for much more than that. We can imagine that we want to be able to randomly stroke the circle with 2 different colors. Here's a sketch that does exactly that:

{% picture random_simple-824d5ee52aa686c7ee89368ac9dd9275.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/randomization/random_simple)

The important thing here is that we can specifically say how much probability we want for the two colors to show. But what if we want to have several different colors, with a specific probability to be chosen? This is called weighted randomness, and can be coded pretty easily by using ArrayLists.


Weighted Randomness
-------------------

Let's say that we want our sketch to choose between 3 different colors: Red, Green and Blue. Each color should have a specific probability to be chosen. You might imagine that we could do something like this:

{% picture random_simple2-58aaf8e5725bc0f7fcda738ef65e3d55.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/randomization/random_simple2)

As you can see, every single color requires an if-statement. Thankfully, Toxiclibs ships with a WeightedRandom class that makes it easy to do that.Here's the simple color example, using Toxiclibs.

{% picture random_class-f46b44157d0867b2526b8c62a257ee9f.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/randomization/toxiclibs_weighted_random)

And here's a slightly more advanced settings example.

{% picture random_circles-e74d3b616fb043fa17139b0463adaf53.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/randomization/toxiclibs_circles)


Perlin Noise
------------

Here's an example of how noise() is different than random(). As you can see, the values are much more organic, though still random.

{% picture random_vs_noise-8670d2707d1d767afad267d2b8182538.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/randomization/random_vs_noise)

When a Processing sketch loads, it will choose a random noiseSeed for the perlin noise. This means that your lines will look different every time the program runs. After launching, the noiseSeed is stable, so all lines using the same noise will look the same (if given the same counter). You can use noiseSeed to change this:

{% picture noise_seed-d86c7549da39cbf91c607cbc1520c4ce.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/randomization/noise_seed)

You can manipulate the octaves and falloff via the noiseDetail function.

{% picture noise_detail-8ff03c04de4f473cf1e4547e11150408.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/randomization/noise_detail)

Perlin Noise can be used to do many things. One of things that it's great for is introducing a more organic feel into your sketches. Here's a sketch with a circle drawn with Perlin Noise.

{% picture noise_organic-a0994847ef608c02f8de408e8f316edf.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/randomization/noise_organic)

It's quite easy to draw a circle with Perlin noise, but forming many straight lines into a form can be hard. Here's an example of how you can create your own line function that draw a line with Perlin Noise:

Another thing Perlin Noise can be used for, is to create gradient surfaces with an organic look. Here's a Processing sketch that uses Perlin noise in 2 dimensions:

{% picture noise_surface-f4afc89ea1d83190bdd307d040a82e0b.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/randomization/noise_surface)