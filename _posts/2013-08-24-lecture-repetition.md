---
layout:     [default, slides]
title:      Repetition
date:       2013-08-24 19:15:22
categories: printing-code
---


Repetition
==========

Humans have a weird fascination with repetition. The effect of marching soldiers, the arrangement of a bed of flowers. Crowds at football stadiums or concerts. A migrating flock of birds. It's almost hypnotic.

{% picture grapefruit-f878746de904d9076fb484f037e8f59e.jpg %}

Repetition in Graphic Design
----------------------------

In graphic design, we can repeat font style, graphic, line, icons, colors, etc. We can use repetition for many things. However, repetition is not something humans are good at. Take this poster by Paul Rand for example.

{% picture repetition-c04c2b404062800bb91da70afe7b02e0.jpg %}

Paul Rand had to manually arrange all those hearts, in order to simulate a very computational repetition. However, as programmers, we can distill his design rule into code. Here's that exact same design, recreated in code.

{% picture repetition_rune-3957a470b24efe77e90c2b1ba82ba399.png %}

But now that we have the design rule in code, we can randomize some value, in order to create a dynamic design, where we quickly can explore different designs.

{% picture repetition_rune2-f1c5bf9053be244618a920ce468d2162.png %}

{% picture repetition_rune3-99a53a94e5235a7645b3c9bb376d7af3.png %}

{% picture repetition_rune4-98ad088e49f9ee68b00b9fae2ff6e9d2.png %}

{% picture repetition_rune5-cf7b72b4c126d817a9302da66eaa36d3.png %}

{% picture repetition_rune6-e489bf3664a6bf9022f30644e2176d71.png %}

{% picture repetition_rune7-f118423aaffa9b430a9c857730366d47.png %}

{% picture repetition_rune8-2cf831399a750f7b1937d1496b8a8957.png %}

{% picture repetition_rune9-84b962a896baf344346bb735a86df120.png %}

If we really look at the graphic design masters, repetition is used throughout our graphic design history, and it can be used for many different purposes. Here's a few examples.

Repetition as Movement
----------------------

{% picture pintori_movement-b53fe0d41d74aeecae6229f32edf9d63.jpg %}

{% picture pintori_movement2-4de03c19ef06738a46b8e6bbed007ffb.jpg %}

{% picture rand_movement-b250d8dfe70c87c3a1d188605af58ea0.jpg %}

Repetition as Rhythm
--------------------

{% picture rand_rhythm-be6742943d9ed9acf804d72a2d29f16c.jpg %}

{% picture brockmann_rhythm-bd5844d1635d76f22be923a9eba51dc6.jpg %}

{% picture brockmann_rhythm2-f47dd5d7225105703a51b999cda7c349.png %}

Repetition as Direction
-----------------------

{% picture megert_direction-4f911599823c1d0e343cd7047ca22eba.png %}

{% picture rand_direction-25bb0eb747b8e063762662497de56fd8.jpg %}

{% picture direction2-661c691fd505b3b9c6d60be65babf19a.png %}

Repetition as Texture
---------------------

{% picture mandala-a4991e3cbbf770008b2cb24b262f062f.jpg %}

{% picture champalimaud_texture-007b0d465413686aaf044c2a1f076891.jpg %}

{% picture lewitt_texture-6982f93c8e67241a39e180c23a0d5724.jpg %}

{% picture lewitt_texture2-e36aba3f361eb2bd9919ed7157649b0f.jpg %}


The `while` loop
----------------

When you want to create randomly distanced things without overlapping.

Periodic Tiling
---------------

It's pretty easy to do periodic tiling in code. Here's an example of somehow simple pattern created with a single for-loop.

![Simple pattern](http://assets.runemadsen.com/pattern_simple-29f226b45ac173e3a9dbc47808391ef4.svg)

[See example code](../examples/repetition/pattern_simple/index.html)

Here's a slightly more complicated cube pattern, also using a single for-loop.

{% picture cube_pattern-d39c6dbc38b160b1fc218299bf1e2261.png %}

[See example code](../examples/repetition/pattern_cube/index.html)

Here's that same cube pattern code, but using a function to clean up the code function.

{% picture cube_pattern_class-682abcbc84d236227e2c45ef85cd124b.png %}

[See example code](../examples/repetition/pattern_cube_function/index.html)

Here I'm using the function twice to overlay two patterns

{% picture cube_pattern_class_overlay-e930caf6936df88ffe8806713729f0cf.png %}

[See example code](../examples/repetition/pattern_cube_overlay/index.html)

However, these patterns only allow us to create strictly repetitive patterns. To do more sophisticated patterns, we need to learn about aperiodic tiling.


Recursion
---------

Crucial to the concept of aperiodic tiling is recursion.

{% picture recursion_ref-df6c04220a054cd5151bb520849051a1.jpg %}

![Recursion](http://assets.runemadsen.com/recursion_1-667d982e23ebae4fdb38bc21afd60e68.svg)

[See example code](../examples/repetition/recursion_1/index.html)

Or here's a slightly more usable example, where I'm splitting a rectangle via recursion.

{% picture recursion2-58608d8045dd96513a43fb08db232f95.png %}

[See example code](../examples/repetition/recursion_2/index.html)


Aperiodic Tiling: Substitution Rules
------------------------------------

**Simple aperiodic tiling**

{% picture aperiodic_division_simple-3d5eb91e96e7c5bd797bae019ba7db62.jpg %}

{% picture aperiodic_division_simple2-4b97ac1c5e4e8b88fc495362aa76fc45.jpg %}

{% picture aperiodic_division_simple3-1be895e80f7db8b58d9d17b589f3c9f7.jpg %}

{% picture aperiodic_division_simple4-1cb5aff9efb0f364b5e2843bbcd01649.jpg %}

{% picture aperiodic_division_simple5-6f34d0e4d36f98c57183c09bd16598cc.jpg %}

{% picture aperiodic_division_simple6-d391059b4ff4842cd5a62dbc6737cbc1.jpg %}

[See example code](../examples/repetition/pattern_aperiodic_1/index.html)

**Slightly more advanced aperiodic tiling**

[Substitution Rule](http://tilings.math.uni-bielefeld.de/substitution_rules/t2000)

{% picture aperiodic_division-7f39761fc8005adfa17aff059d06ffa6.jpg %}

{% picture aperiodic_division2-95c6ee23fb3632ab12c0b73a7ef3093c.jpg %}

{% picture aperiodic_division3-90cbb471adab2beafb2aa81f1648dc06.jpg %}

{% picture aperiodic_division4-8510a6a9f98826c26c5360b41030d18b.jpg %}

{% picture aperiodic_division5-3a6b35935d2c7da8dec93324e5e15a64.jpg %}

{% picture aperiodic_division6-aa98859e6e390972ec2d39fab6bf611d.jpg %}

{% picture aperiodic_pattern-9e0b343650d2dec9e9e879de610bff8c.jpg %}

[See example code](../examples/repetition/pattern_aperiodic_2/index.html)


Some Pattern Examples
---------------------

Andy Gilmore

{% picture gilmore1-fd1bd0de39d88eafb670b63280f7e40b.jpg %}

{% picture gilmore2-53130a1423e816b3539a89eb68be8fea.jpg %}

{% picture gilmore3-42a938e518b91f6a6abc06f45fea317e.jpg %}

{% picture gilmore4-694ffde3930a6cf49c35e6cef020b191.jpg %}

{% picture gilmore5-6b99557ac8a7a9d0ece2515ad396d616.jpg %}

{% picture gilmore6-b82ae630617d31dc54e48909d1fea873.jpg %}

{% picture gilmore7-207d516c861157d47e729a5716143b9a.jpg %}

{% picture gilmore8-07cdf5d4b3e9616f83eeac933ee7a9d1.jpg %}

{% picture gilmore9-ecd547c9cfaffe001de591efa3b4e2f1.jpg %}

{% picture gilmore10-8641ac7d8ddd923ef2b26d37943dc3b8.jpg %}
