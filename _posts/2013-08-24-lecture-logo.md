---
layout:     default
title:      Logo
date:       2013-08-24 19:15:22
categories: printing-code
---


Dynamic Logos
=============

1. How do we design something that identifies a certain object, person or group?
2. Can we use code to create dynamic identities

It's hard to show specific techniques for how to do dynamic logos - so I took a bunch of them and recreated in Processing.

Important: It starts with an idea. Then an implementation. Like John Cage said: "Do not try to create and analyze at the same time. They are different processes".


What is a (successful) Logo?
----------------------------

A symbol that says everything about an entity in the simplest possible way.

{% picture grid5-6e16b8cc81c7fb843513ddffe9fceae3.jpg %}

{% picture okasan-293f312ac5e32c163c81429659bb8239.jpg %}

{% picture ibm-a4d5f22d532d35902f8c6850f1c7d520.jpg %}

{% picture look-0ff3ae6ba861ede2be3ec42c5f88248a.jpg %}

{% picture families-7390e75ac5352ab506a36af232779e3b.jpg %}


Dynamic Logo Examples
---------------------


### Karl Gerstner

{% picture designing_programmes-b1986c73a63e5e01c8a61b9c997bedd9.jpg %}

{% picture gerstner-1397e436a7b74a23db25b6cc85410420.jpg %}

The difficult thing when creating generative logos is setting up constraints to make the logo look good - but different - on every run. This can be hard.


### Lava Sans Avec

<iframe src="http://player.vimeo.com/video/23500126?title=0&amp;byline=0&amp;portrait=0" width="600" height="338" frameborder="0" > </iframe>

{% picture lava-e1d2d5423117d9e9eb8405bb85ee11d0.jpg %}

{% picture lava2-3eaae44e326f33aa894b9cb7cb4962ce.jpg %}

{% picture lava3-dda89c3bff5d84b338b08d009f2c32d6.jpg %}

{% picture lava4-dd02dedec2c9fbe0b89805dae5e59b2b.jpg %}

{% picture lava5-c3425a9d3f53ac5b2d3d57b686428f57.jpg %}\\


### ITI

Here's a dynamic identity for ITI, which is basically just multiple variations of an unfolded box (hello Sol Lewitt!).

<iframe src="http://player.vimeo.com/video/32502124?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="600" height="375" frameborder="0" > </iframe>

{% picture iti-a20a8ef57e3718dff21086e22325d736.jpg %}

{% picture iti2-1ba5ac087ebc9406b4965973b041dc14.jpg %}


### City of Melbourne

Identity for the city of Melbourne. All variations are built around the points of the 3D structure. Constraints and variation!

{% picture melbourne-e1f4e11c691bbdabba8fb54a7ceb86a8.jpg %}

{% picture melbourne2-645cf3f8605ffd11ae0e19fc78178593.jpg %}

{% picture melbourne3-868bf404bf038fa5c780812861ae25b2.jpg %}

{% picture melbourne4-e4b507099a12acd1d1016d024c821327.jpg %}


### Function Engineering

<iframe src="http://player.vimeo.com/video/80205762?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="600" height="375" frameborder="0" > </iframe>

{% picture function1-ac37089eacf3de3d4ded586014fe2636.jpg %}

{% picture function2-04f952c58749a3c2a98f26553cf91e7e.jpg %}

{% picture function3-5f218f86aede84d8dfc50dd01f8365e2.jpg %}

{% picture function4-ff036e5e40b462ea35e7d87c0e382e32.jpg %}

{% picture function5-757aa43a8942b582343e85bbe6adf51f.jpg %}

{% picture function6-24f3528f47abe73e14c9ddfc7702df58.jpg %}

{% picture function7-6c07f0b9dd15dc7ad2ef510fe054f795.jpg %}


Here's [even](http://superserious.net/work18.html), [more](http://www.underconsideration.com/brandnew/archives/monospace_theatre.php) projects.


Dynamic Logo Examples with Source Code
--------------------------------------


### Security Forum

{% picture security-5cf10ed78209b854bed734303279a794.jpg %}

{% picture security2-46cb2a09cc38264cb0fc8e0393074556.jpg %}

{% picture security3-b89cab6e3b58fad4d6c21969543719ce.jpg %}

{% picture security4-d6e1b55a259a2118359d062451347569.jpg %}

This logo is extremely easy to recreate with sin() and cos().

{% picture security_example-9d274d86a86133d07b9dc8842a8066a0.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/logo/security)

However, this code has a few problems. The biggest one is that the same dot can be picked over and over. We need to implement constraints to make the generative output a little cleaner:

{% picture security_example_advanced-0cf8fa2ecd574bb5d8b79a183201cb12.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/logo/security_advanced)


### The MIT Logo

<iframe src="http://player.vimeo.com/video/20250134?title=0&amp;byline=0&amp;portrait=0" width="600" height="339" frameborder="0"> </iframe>

Each person at MIT can get his own logo. 40,000 permutations.

{% picture mit-3fc7605ab0140e6054ada664c776d868.jpg %}

{% picture mit3-af7ee07bc2dde89cfc4fa4e57cdc78b1.jpg %}

{% picture mit5-619ad099b62e30d7bcd55b718d2c501f.jpg %}

{% picture mit4-1d6c92a82c8c291086401a1068eb175e.jpg %}

{% picture mit8-cbb578898c3ab2b581bd87868f4271ef.jpg %}

{% picture mit2-17d6fde569ce8f867cee001c1eece0f8.jpg %}

{% picture mit6-d3617e70d599ec0fc66acb0ecb7e027d.jpg %}

{% picture mit7-836f4e341915000b3019a57569a37dd6.jpg %}

Here's a Processing sketch that recreates the basic output of the MIT logo. A lot of the fine-tuning is left out, but it should give you an idea.

{% picture mit_example-a9f247b1f9485d4fcc0f59321bab8365.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/logo/mit)


### Casa de Musica

<iframe width="600" height="338" src="http://www.youtube.com/embed/URmKSyKAK5w" frameborder="0" > </iframe>

Based on the building.

{% picture musica-df68380a44184e3f9daedd6c0b113777.jpg %}

{% picture musica2-4e43f4e173771b86f52b518e8e0e115b.jpg %}

{% picture musica3-a387a8498391e054f8383241baa3c48a.jpg %}

{% picture musica4-6ff5ab410af1a1ea86504f3bdf765e14.jpg %}

{% picture musica5-df80b05145566386daa6c97884db0060.jpg %}

{% picture musica6-746b546db75f412059e7d8eea7f54e55.jpg %}

{% picture musica7-4760faab82c9df8e3a14bbf0177b5045.jpg %}

{% picture musica8-d19352f265dc4f76ad136c319e946ae8.jpg %}

{% picture musica9-ec4df9fd685b88672b012654d619cd08.jpg %}

{% picture musica10-937d092476808925c24d99dc75bb8aa7.jpg %}

Here's an example of how to approach this kind of logo in Processing:

{% picture musica_example-b4d0e60882eed14d110123c88a741226.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/logo/musica)

What you'll see is that whenever you code something generative, the designer in you has to establish some kind of constraints in the code. Here the colors cannot be too similar to the background, nor should they be too similar inside the logo. Working in HSB would make it possible for you to handle the brightness if too big, small, etc.


### Seed Media Group

Here's a dynamic identity Stefan Sagmeister made for the Seed Media Group, based on the phyllotaxis algorithm.

{% picture seed-2499bf266c6f48699c1bc79f48f16b67.jpg %}

{% picture seed2-ff45bca616c2704290a396732db142f7.jpg %}

{% picture seed3-b2893d5bb4cc7128f938dbc547b9199b.jpg %}

{% picture seed4-27016ec069480fa09bb1e577e3c30d29.jpg %}

{% picture seed5-dc6798f52348ba70a665e724d53237c6.jpg %}

Here is the form recreated in Processing.

{% picture seed_example-c9f966a67f7e4a876f6d2706e3d20e87.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/logo/seed)
	
However, to grab the pixels from an image we need to know the bounds of the shape, and we can do this by creating a holder class and counting the size. We then normalize the positions and choose pixel colors from our sample image:

{% picture seed_example2-d2a2ca574ca0802f1805d547bb0f174e.jpg %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/logo/seed_class)

If you add a little randomness, we now have a dynamic logo.

{% picture seed_examples-ceef7cd8c79247263a8f65dad98832af.jpg %}