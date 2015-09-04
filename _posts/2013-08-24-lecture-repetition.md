---
layout:     default
title:      Repetition
date:       2013-08-24 19:15:22
categories: printing-code
---


Repetition
==========

Humans have a weird fascination with repetition. The effect of marching soldiers, the arrangement of a bed of flowers. Crowds at football stadiums or concerts. A migrating flock of birds. It's almost hypnotic.

<img src="{{ imageproxy_url }}/grapefruit-f878746de904d9076fb484f037e8f59e.jpg"  />

Repetition in Graphic Design
----------------------------

In graphic design, we can repeat font style, graphic, line, icons, colors, etc. We can use repetition for many things. However, repetition is not something humans are good at. Take this poster by Paul Rand for example.

<img src="{{ imageproxy_url }}/repetition-c04c2b404062800bb91da70afe7b02e0.jpg"  />

Paul Rand had to manually arrange all those hearts, in order to simulate a very computational repetition. However, as programmers, we can distill his design rule into code. Here's that exact same design, recreated in Processing.

<img src="{{ imageproxy_url }}/repetition_rune-3957a470b24efe77e90c2b1ba82ba399.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/repetition/repetition)

But now that we have the design rule in code, we can randomize some value, in order to create a dynamic design, where we quickly can explore different designs.

<img src="{{ imageproxy_url }}/repetition_rune2-f1c5bf9053be244618a920ce468d2162.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/repetition/repetition)

<img src="{{ imageproxy_url }}/repetition_rune3-99a53a94e5235a7645b3c9bb376d7af3.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/repetition/repetition)

<img src="{{ imageproxy_url }}/repetition_rune4-98ad088e49f9ee68b00b9fae2ff6e9d2.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/repetition/repetition)

<img src="{{ imageproxy_url }}/repetition_rune5-cf7b72b4c126d817a9302da66eaa36d3.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/repetition/repetition)

<img src="{{ imageproxy_url }}/repetition_rune6-e489bf3664a6bf9022f30644e2176d71.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/repetition/repetition)

<img src="{{ imageproxy_url }}/repetition_rune7-f118423aaffa9b430a9c857730366d47.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/repetition/repetition)

<img src="{{ imageproxy_url }}/repetition_rune8-2cf831399a750f7b1937d1496b8a8957.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/repetition/repetition)

<img src="{{ imageproxy_url }}/repetition_rune9-84b962a896baf344346bb735a86df120.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/repetition/repetition)

If we really look at the graphic design masters, repetition is used throughout our graphic design history, and it can be used for many different purposes. Here's a few examples.

Repetition as Movement
----------------------

<img src="{{ imageproxy_url }}/pintori_movement-b53fe0d41d74aeecae6229f32edf9d63.jpg"  />

<img src="{{ imageproxy_url }}/pintori_movement2-4de03c19ef06738a46b8e6bbed007ffb.jpg"  />

<img src="{{ imageproxy_url }}/rand_movement-b250d8dfe70c87c3a1d188605af58ea0.jpg"  />

Repetition as Rhythm
--------------------

<img src="{{ imageproxy_url }}/rand_rhythm-be6742943d9ed9acf804d72a2d29f16c.jpg"  />

<img src="{{ imageproxy_url }}/brockmann_rhythm-bd5844d1635d76f22be923a9eba51dc6.jpg"  />

<img src="{{ imageproxy_url }}/brockmann_rhythm2-f47dd5d7225105703a51b999cda7c349.png"  />

Repetition as Direction
-----------------------

<img src="{{ imageproxy_url }}/megert_direction-4f911599823c1d0e343cd7047ca22eba.png"  />

<img src="{{ imageproxy_url }}/rand_direction-25bb0eb747b8e063762662497de56fd8.jpg"  />

<img src="{{ imageproxy_url }}/direction2-661c691fd505b3b9c6d60be65babf19a.png"  />

Repetition as Texture
---------------------

<img src="{{ imageproxy_url }}/mandala-a4991e3cbbf770008b2cb24b262f062f.jpg"  />

<img src="{{ imageproxy_url }}/champalimaud_texture-007b0d465413686aaf044c2a1f076891.jpg"  />

<img src="{{ imageproxy_url }}/lewitt_texture-6982f93c8e67241a39e180c23a0d5724.jpg"  />

<img src="{{ imageproxy_url }}/lewitt_texture2-e36aba3f361eb2bd9919ed7157649b0f.jpg"  />


Repetition in Processing
------------------------

When it comes to repetition and tiling, there are 2 distinct types of patterns. The periodic tiling:

<img src="{{ imageproxy_url }}/repetition_periodic-d500e846d6dbf01800e2cd72590c2910.jpg"  />

... and the aperiodic tiling:

<img src="{{ imageproxy_url }}/repetition_aperiodic-b9225313d4b2427f32d5b35a660aea08.png"  />

Periodic Tiling
---------------

It's pretty easy to do periodic tiling in Processing. Here's an example of an extremely ugly pattern created with a for-loop.

<img src="{{ imageproxy_url }}/simple_pattern-8f9be51ee7d8192d59bc710e814a75a3.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/repetition/simple_pattern)

Here's a slightly better looking cube pattern.

<img src="{{ imageproxy_url }}/cube_pattern-d39c6dbc38b160b1fc218299bf1e2261.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/repetition/cube_pattern)

Here's that same cube pattern code, but using a function to clean up the main setup function.

<img src="{{ imageproxy_url }}/cube_pattern_class-682abcbc84d236227e2c45ef85cd124b.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/repetition/cube_pattern_function)

Here I'm using the function twice to overlay two patterns

<img src="{{ imageproxy_url }}/cube_pattern_class_overlay-e930caf6936df88ffe8806713729f0cf.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/repetition/cube_pattern_function_overlay)

However, these patterns only allow us to create stricly repetitive patterns. To do more sophisticated patterns, we need to learn about aperiodic tiling.


Recursion
---------

Crucial to the concept of aperiodic tiling is recursion. 

<img src="{{ imageproxy_url }}/recursion_ref-df6c04220a054cd5151bb520849051a1.jpg"  />

<img src="{{ imageproxy_url }}/recursion-8496e76d4293a5b17186220ccf004756.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/repetition/recursion)

Or here's a slightly more usable example, where I'm splitting a rectangle via recursion.

<img src="{{ imageproxy_url }}/recursion2-58608d8045dd96513a43fb08db232f95.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/repetition/recursion2)


Aperiodic Tiling: Substitution Rules
------------------------------------

**Simple aperiodic tiling**

[Substitution Rule](http://web.media.mit.edu/~black/tiles/aperiodic.html)

<img src="{{ imageproxy_url }}/aperiodic_division_simple-3d5eb91e96e7c5bd797bae019ba7db62.jpg"  />

<img src="{{ imageproxy_url }}/aperiodic_division_simple2-4b97ac1c5e4e8b88fc495362aa76fc45.jpg"  />

<img src="{{ imageproxy_url }}/aperiodic_division_simple3-1be895e80f7db8b58d9d17b589f3c9f7.jpg"  />

<img src="{{ imageproxy_url }}/aperiodic_division_simple4-1cb5aff9efb0f364b5e2843bbcd01649.jpg"  />

<img src="{{ imageproxy_url }}/aperiodic_division_simple5-6f34d0e4d36f98c57183c09bd16598cc.jpg"  />

<img src="{{ imageproxy_url }}/aperiodic_division_simple6-d391059b4ff4842cd5a62dbc6737cbc1.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/repetition/aperiodic_tiling)

**Slightly more advanced aperiodic tiling**

[Substitution Rule](http://tilings.math.uni-bielefeld.de/substitution_rules/t2000)

<img src="{{ imageproxy_url }}/aperiodic_division-7f39761fc8005adfa17aff059d06ffa6.jpg"  />

<img src="{{ imageproxy_url }}/aperiodic_division2-95c6ee23fb3632ab12c0b73a7ef3093c.jpg"  />

<img src="{{ imageproxy_url }}/aperiodic_division3-90cbb471adab2beafb2aa81f1648dc06.jpg"  />

<img src="{{ imageproxy_url }}/aperiodic_division4-8510a6a9f98826c26c5360b41030d18b.jpg"  />

<img src="{{ imageproxy_url }}/aperiodic_division5-3a6b35935d2c7da8dec93324e5e15a64.jpg"  />

<img src="{{ imageproxy_url }}/aperiodic_division6-aa98859e6e390972ec2d39fab6bf611d.jpg"  />

<img src="{{ imageproxy_url }}/aperiodic_pattern-9e0b343650d2dec9e9e879de610bff8c.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/repetition/aperiodic_tiling2)


Some Pattern Examples
---------------------

Andy Gilmore

<img src="{{ imageproxy_url }}/gilmore1-fd1bd0de39d88eafb670b63280f7e40b.jpg"  />

<img src="{{ imageproxy_url }}/gilmore2-53130a1423e816b3539a89eb68be8fea.jpg"  />

<img src="{{ imageproxy_url }}/gilmore3-42a938e518b91f6a6abc06f45fea317e.jpg"  />

<img src="{{ imageproxy_url }}/gilmore4-694ffde3930a6cf49c35e6cef020b191.jpg"  />

<img src="{{ imageproxy_url }}/gilmore5-6b99557ac8a7a9d0ece2515ad396d616.jpg"  />

<img src="{{ imageproxy_url }}/gilmore6-b82ae630617d31dc54e48909d1fea873.jpg"  />

<img src="{{ imageproxy_url }}/gilmore7-207d516c861157d47e729a5716143b9a.jpg"  />

<img src="{{ imageproxy_url }}/gilmore8-07cdf5d4b3e9616f83eeac933ee7a9d1.jpg"  />

<img src="{{ imageproxy_url }}/gilmore9-ecd547c9cfaffe001de591efa3b4e2f1.jpg"  />

<img src="{{ imageproxy_url }}/gilmore10-8641ac7d8ddd923ef2b26d37943dc3b8.jpg"  />


Links
-----

* [Inspirational Patterns #1](http://design.org/blog/patterns-and-graphic-design-yegor-legkov)
* [Inspirational Patterns #2](http://pinterest.com/cukri/graphic-design-patterns-textures/)
* [Fabric Patters](http://patternobserver.com/)
* [Islamic Patterns Research Project](http://nomadinception.com/gallery-arabic-patterns-islamic-patterns-research.aspx)
* [Pattern Substitution Rules](http://tilings.math.uni-bielefeld.de/substitution_rules/)
* [More substitutions](http://web.media.mit.edu/~black/tiles/aperiodic.html)