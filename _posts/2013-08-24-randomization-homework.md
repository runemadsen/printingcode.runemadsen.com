---
layout:     [default, slides]
title:      Randomization Homework
date:       2013-08-24 19:15:22
categories: printing-code
---

Randomization Homework
======================

In these short examples, I'll show how I would solve this week's homework using vectors.

{% picture pintori5-60c69425c0d5220d0fe4e6eace9fd53a.jpg %}

Here's the most basic sketch, in black and white, that demonstrates how to use vectors and perlin noise to calculate the positions of the triangles.

{% picture randomization_simplest-018dfa415f3db6b8404e43e67a1c9e37.png %}

[See example code](/examples/randomization/pintori_1/index.html)

Now we add colors.

{% picture randomization_simple-26569d6cadb7b5261a47420447529e01.png %}

[See example code](/examples/randomization/pintori_2/index.html)

In the examples above, there are 2 problems:

1. The colors in the original work is not created by overlaying two triangles with different opacity 2. The shapes are going straight up in the air, and not rotating.

This is solved in this (more complicated sketch) by using 3 different colors and 3 triangles, and calculating their placement using the `Rune.Polygon` and `centroid()`.

{% picture randomization-8e990f503b76f19ab059a6a1bd291da4.png %}

[See example code](/examples/randomization/pintori_3/index.html)
