---
layout:     [default, slides]
title:      Randomization
date:       2013-08-24 19:15:22
categories: printing-code
---


Randomization
=========================

When we talk about randomization in design, people often think about generative or algorithmic art, where an algorithm spins out of control and splatter thousands of random shapes on a canvas. This is not what this class is about.

Randomization in the arts
-------------------------

The concept of randomization has been an essential tool for graphic designers way before the computer. Although entirely done by hand, random positioning and coloring has been used to create expressive and dynamic designs for a long time. With the computer we have the ability to move beyond simple random shapes and create design systems that are entirely dynamic in nature – code that specifies certain parameters that the algorithm can play within, and where randomization helps create new and exciting outputs within the broader design constraints. In this way of designing, the designer becomes more of a director who sets up the basic constraints of the design, and where the algorithm renders an original design within these constraints every time it runs.

Dynamic logos, generative color schemes, and type systems are all possible because of the simple concept of letting the computer choose a number for you. The aim of this class is to introduce the basic concept of randomization, and to use it for aesthetically pleasing, good designs.

{% picture klee-47d8e240c0ade82ab0b354b055960690.jpg %}

{% picture lewitt-dcefc4a7a529e3cab2e132763bc475d5.jpg %}

{% picture randomrand1-9c622b0cf38a335eb224042d238d5026.jpg %}

{% picture randomrand2-5a8c9560b99932fdf06ed8d3d5ab685e.jpg %}

{% picture pintori1-68d4ed34729a7c30779199e2c4b69d40.jpg %}

{% picture pintori2-86492848829e0215bd3c847c825a703b.jpg %}

{% picture pintori3-0f24220b899b60aea3a2e72ae326d0c7.jpg %}


Randomization techniques
------------------------

The following sketch shows how to use `random()` to make something happen only a certain percent of the time.

[See example code](../examples/randomization/chance/index.html)

However, what if you want to do something a bit more sophisticated, like picking a random color from an array of colors, where each of the colors have a specific chance of getting picked? The following sketch shows how to do weighted randomness.

[See example code](../examples/randomization/weighted/index.html)

You can also use a library like [seedrandom](https://github.com/davidbau/seedrandom) to have randomization, but have it always be the same random numbers.

Random color scheme example.


Perlin Noise
------------

Here's an example of how perlin noise is different than using `random()`. As you can see, the values are much more organic, though still random.

{% picture random_vs_noise-8670d2707d1d767afad267d2b8182538.jpg %}

[See example code](../examples/randomization/random_vs_noise/index.html)

When you create a new `Rune.Noise` object, it will choose a random starting point for the noise. If you don't want the seed to be random, you can use `noiseSeed()` to set a specific starting position for the noise. You can also call `noiseSeed` in between `noise.get()` calls, which will re-seed the noise and give you different values from the same input.

{% picture noise_seed-d86c7549da39cbf91c607cbc1520c4ce.jpg %}

[See example code](../examples/randomization/noiseseed/index.html)

You can manipulate the octaves and falloff via the noiseDetail function.

{% picture noise_detail-8ff03c04de4f473cf1e4547e11150408.jpg %}

[See example code](../examples/randomization/noisedetail/index.html)

Perlin Noise can be used to do many things. One of things that it's great for is introducing a more organic feel into your sketches. Here's a sketch with a circle drawn with Perlin Noise.

{% picture noise_organic-a0994847ef608c02f8de408e8f316edf.png %}

[See example code](../examples/randomization/noise_circle/index.html)

Here's a more complex example where we draw an iceberg-like shape with perlin noise.

![Iceberg](http://assets.runemadsen.com/iceberg-e36a4d5ccba47815c0386af3636f0956.svg)

[See example code](../examples/randomization/noise_iceberg/index.html)
