---
layout: default
title: Rune Madsen
---

About the class
===============

**Printing Code** is a graduate course taught at the Interactive Telecommunications Program at New York University. In this course students explore the use of computational techniques to produce physical prints, focusing on the intersection between graphic design and code. Class time will be divided between exploring design topics like colors, grids and typefaces, and applying these towards computational topics like randomization, repetition, transformation and generative form.

Weekly readings include relevant writings from the history of graphic design ([Josef Muller-Brockmann](http://bit.ly/KR2jkA), [Paul Rand](http://bit.ly/KzNyhy)), articles from the history of computation ([Vannevar Bush](http://bit.ly/9Zat9h), [Douglas Englebart](http://bit.ly/B4HDX)) and everything in between ([Sol Lewitt](http://bit.ly/BX1iy), [Edward Tufte](http://bit.ly/49i1Xj)).

Weekly homework can be produced using the digital printers at [NYU’s Advanced Media Studio](http://bit.ly/Krjjhh), however students are encouraged to utilize whatever physical printing techniques they prefer, that being stencils, letter press, silk screen, weaving or home-made printers.

The class aims not only to teach the students how to create physical prints via code, but also to have something interesting to say about it. The class requires ICM or similar programming background.


### Github Repository

All code examples and frameworks used in the class can be found on Github:

* [https://github.com/runemadsen/printing-code](https://github.com/runemadsen/printing-code)


### Teacher Info

* Rune Skjoldborg Madsen
* rune@runemadsen.com
* [www.runemadsen.com](http://www.runemadsen.com)
* [Office Hours Signup](https://www.google.com/calendar/selfsched?sstoken=UUZYRVhjenlybjZ6fGRlZmF1bHR8ZTlhNjZkZmUwMjU1MTRkNGI3NDQyYzBjMGZjNjNjZWM)


### Students

* [Class Spring 2014](/students-spring-2014)
* [Class Spring 2013](/students-spring-2013)
* [Class Fall 2012](/students-2012)

Introduction
------------

> It’s important to use your hands, this is what distinguishes you from a cow or a computer operator - Paul Rand

For many years graphic design education has been a separate field. You learn about color, grids, form, scale, typography, and books on the subject are geared towards individuals with visual creativity. The opposite can be said about the field of programming that for a long time has been geared towards technically skilled people. During the last decade this line has obviously blurred, but not to the degree one would expect. 

For someone who grew up as a part of the computer generation, this divide might seem problematic. My first experiments with color and form was also when learning HTML and CSS, so how do I know where design stops and programming begins? Graphic design and programming are so intermingled today that a term like *Computational Design* seems like a much better explanation of the two merging fields. [Design is how it works](http://daringfireball.net/2012/02/walter_isaacson_steve_jobs), not just a last layer of make-up.

As I've grown more experienced as a graphic designer, it has become obvious that a great deal of this experience is built on a very systematic approach to design. Graphic design can at times seem like algorithms controlled by a creative vision. Grids are just basic measurements. Typography is spacing and curves. Color schemes are proportional spacings placed on the color spectrum. This class is about investigating what happens when we start creating graphic art only by writing code. It's an experiment in replacing already exiting tools (that too long has dictated the visual look of computational design - hello drop shadow) with our own software programs. We will investigate graphic design systems, distill them into algorithms, and eventually let them spin out of control.

It's important to note that this class is not so much about generative design, as it's about graphic design through code. I see no value in splattering a shape 5000 times on a canvas, calling it generative art, just because we can. It's about distilling already existing graphic design techniques into code, making valid and reasonable assumptions, and then - only then - letting things spin out of control.


Week 1: Hello World
-------------------

> Beauty is a function, after all, of any relevant visual message. Just as prose can be dull and straight-forward or well edited and lyrical, so too can a utilitarian object be designed to be more than just simply what it is.
>
>*Timothy Samara, Design Elements*

In this class we'll introduce ourselves, and talk a little bit about the class, graphic design and computation. Please read these texts before coming to the class.

### Readings for this week

* [Form + Content](http://files.runemadsen.com/rand_form_content.pdf) by Paul Rand (Design, Form and Chaos)
* [Software Structures](http://artport.whitney.org/commissions/softwarestructures/text.html) by Casey Reas
* [Computers, Pencils, and Brushes](http://files.runemadsen.com/rand_computers.pdf) by Paul Rand (Design, Form and Chaos)

### Class Overview

* Introductions
* [About the class](/about-the-class)
* Syllabus Walk-Through
* Lecture: **[The History of Graphic Design and Computational Form](/lecture-intro)**
* Generating PDFs with Processing
* Readings

### Assignment for next week

* Please join the [Printing Code Google Group](https://groups.google.com/forum/?fromgroups#!forum/printing-code)
* Set up a Github repository where you'll post all your code. Send me an email with the link.
* On ITP's laser printer, print a PDF file generated via a Processing sketch. A few rules about your code: You can only use black (0) and white (255). You are only allowed to use triangle(), rect() and ellipse() once each, and no other drawing functions are allowed (no beginShape or images). Bring to class a design of an ice cream cone. Yes, an ice cream cone.
* Read [Paul Rand - Conversations with Students](http://files.runemadsen.com/rand_conversations.pdf)

Week 2: Form
------------

> Without aesthetic, design is either the humdrum repetition of familiar cliches or a wild scramble for novelty. Without the aesthetic, the computer is but a mindless speed machine, producing effects without substance. Form without relevant content, or content without meaningful form.
>
> _Paul Rand_

This week we'll look at the most basic subject in the visual arts: manipulation of form. We'll talk about techniques for creating form in Processing, look at examples from the history of graphic design, and introduce basic ways of using randomization and repetition.

### Class Overview

* Homework presentations
* Lecture: **[Computational Format and Form](/lecture-form)**
* [Preparing your image for AMS](/preparing-for-ams)
* Trip to AMS

### Assignment for next week

* Write a Processing sketch that outputs 2 shapes on a page. The first shape should be inspired by the word "wet". The second shape should be inspired by the word "sharp".  Use only black and white. You have to use beginShape(), and all vertex points have to be created in a for loop. No manual plotting. Print on a poster at AMS and bring to class for design critique.


Week 3: Color
-------------

In this class we'll dive into color theory and look at color handling in Processing. We'll talk about the history of color, the difference between RGB and HSB, and investigate how to generate color schemes in code.

* Homework design critique
* Lecture: **[Computational Color](/lecture-color)**
* Design exercise: Make something ugly. In Processing, draw 3 squares inside each other, and color them in a 3-color theme that you don't like. Tell us why.

### Assignment for next week

* This week you'll create an abstract representation of your identity. Pick one of the color schemes from today's lecture and write a Processing sketch that outputs abstract forms in colors using your chosen scheme. The only constraint - besides that it needs to as simple as possible - is that the colors have to be different every time you run your sketch. This means that you will need to use "random()". This is an exercise in writing code that is generative, but within constraints. Every output should be different, but still effectively communicate who you are. You have to at least used the TColor class from the Toxiclibs library. Print the result that you like the most, and bring to class a poster that you feel expresses who you are as a person.


Week 4: Typography
------------------

> To create a typeface that is easily malleable in the computational medium, the constituent shapes must be reduced to compact numerical forms.
>
> _John Maeda_

This week we'll look at typography. We'll go through the basic unit measurement that make up a typeface, and how we can manipulate these in Processing.

### Class Overview

* Homework presentations
* Lecture: **[Computational Typography](/lecture-typography)**
* Design exercise: Divide into groups of 3 and come up with 2 algorithimic font systems

### Assignment for next week

* This week you're going to design a word. Pick a word and make a typeface around it. The important thing is that you draw the letters using some kind of rule-based logic. Look at the examples I showed in class, and try to come up with your own typeface system - even if it's very simple. Your goal is to convince me that you can make a typeface that is better constructed in code than in Illustrator.


Week 5: Grid Systems
--------------------

> A grid system is not just a set of rules to follow... but it's also a set of rules to play off of–to break, even. Given the right grid – the right system of constraints – very good designers can create solutions that are both orderly and unexpected.
>
> _Khoi Vinh, New York Times_

In this class we'll look at grid systems and how to use them as guiding constraints for your designs. We'll go through different types of grids, implement these in code, and see how it translates to the world of computational design.

### Class Overview

* Homework design critique
* Lecture: **[Computational Grid Systems](/lecture-grid)**
* Design exercise: [Sigur Ros Grid System](https://github.com/runemadsen/printing-code/blob/master/exercises/sigur_ros/sigur_ros.pde)

### Assignment for next week

* For next week you'll design a cover for a book of your choice. Find the existing cover designs, think about what works and what doesn't, and create your own design based on this analysis. You can use form, color and typography, but not images. The main constraint is that you need to use a grid system to place elements on the page. This is an exercise in creating your own grid system, and simple tweaking of my example variables won't be enough. Try to investigate what happens when you randomize the grid? What happens when you rotate it? What happens when you overlay multiple grids? What happens if you build a grid system with triangles instead of rectangles? The most important thing is to come up with an idea first, and then implement it step by step. Think about all the things we've learned and bring to class a simple poster with a print of your book cover. You may scale up the cover for print if needed, to make it poster size.

Week 6: Logo
------------

To make a well-designed logo requires skills in form, color, type and grid. We'll look at everything from traditional logos to organic, computational logos, and we'll go through different techniques for making generative logos in Processing. This week's assignment is a 1 week midterm project.

### Class Overview

* Homework design critique: Neighbour explains
* Lecture: **[Dynamic Logos](/lecture-logo)**

### Assignment for next week

* For next week write a Processing sketch that outputs a logo for a specific entity, that being a person, group, company, etc. If in doubt, design a logo for ITP. The logo needs to be organic, which means that it has some sort of dynamic expressions. This doesn't mean that it needs to be completely random every time you run the sketch, but it needs to be able to have a range of expressions that can easily be tweaked by changing the variables in the sketch. Bring to class a poster with the same logo printed 3 times in different expressions. For example, if you're designing a logo for ITP, you could have a variation for ITP, one for the ITP Show, and one for ITP Camp. These would look slightly different, but be the output of the same code. Think about form, color, typography and grids before you start coding, and make a strategy. Think. Again, keep it simple. You only have one week. This is a great time to find something in the real world that needs a redesign (your friends' band, a festival, [Arlington Pedriatic Center](http://lh6.ggpht.com/_hVfE2qcyzXU/TMrsVCMfiWI/AAAAAAAAA4Q/o-4G45KsrZo/s800/logo-design-fail-arlington.jpg)... you name it).
* Read [Hackers and Painters](http://www.paulgraham.com/hp.html) by Paul Graham and [Design and the Play Instinct](http://www.reocities.com/paciunia/paulrandsbook.pdf) by Paul Rand.


Week 7: _Midterm Presentations_
--------------------------------

This week will be midterm presentations.


Week 8: Randomization
---------------------

Randomization is about letting the computer choose for us. This week we'll look at ways to create programs that create unique graphics. We'll look at basic randomness, Perlin noise, and how a simple thing like randomness can help you create unexpected things.

### Class Overview

* Reading discussion
* Lecture: **[Randomization](/lecture-randomization)**
* [Vectors](/pvector)
* [Geomerative](/geomerative)


### Assignment for next week

* For next week pick an existing piece of visual art (painting, ad, etc) that uses randomization as a key design principle, and recreate it in Processing. If in doubt, use [one of these famous Olivetti posters](/posters). You should use at least some randomization concepts from this week's lecture in your sketch, in order to make the sketch dynamic. This means that it needs to look different every time it runs, but still have the visual style of the original work. Come to class prepared to show your print + to share how your sketch uses randomization. I'm looking for the simplest possible implementation, which means that it's up to you to set goals that are simple enough for you have time to code and print the assignment.


Week 9: Repetition
------------------

Repetition is highly computational, still human beings have created patterns as long as we have known creative expression. In this class we'll focus on the use of patterns in graphic design, and look at different repetition techniques and ways of creating custom patterns.

### Class Overview

* Quick thoughts on final project
* Guest Lecture
* Lecture: **[Computational Repetition](/lecture-repetition)**
* [Assignment code review](/randomization-homework)
* Exercise: 
* Possible reading discussion


### Assignment for next week

* For next week write a Processing sketch that generates a pattern. The pattern should be a design proposal for the company [Oculus VR](http://www.oculusvr.com), and should be designed to be used for their wrapping paper. So you need to research the company, look at their identity, and come up with a design that reflects this. It doesn't matter whether the pattern is periodic or aperiodic, but what does matter is that it's dynamic. This means that I should be able to change global variables and see the pattern change the next time I run the sketch. Bring to class a printed poster of your pattern, and we'll discuss the proposals.

* Pick a real-world design problem that you will tackle for your final. This can be a full event poster, an album cover, a logo re-design, a full company identity or a book cover. It's all up to you, and there are no constraints. Write a short blog post about your project, and come prepared to talk about it in class. Remember, you cannot change your final project once the blog post is written.


Week 10: Transformation
----------------------

What happens to graphic files when we start to manipulate the pixels in code? Can we still preserve meaning while creating beauty with algorithms? This week we'll look at different techniques for manipulating pixel arrays. We will look at examples of transformation in graphic design even before the computer, compare these to recent examples of transformation in graphic design products, and go through photo filter algorithms in Processing.

### Class Overview

* Homework presentations
* How to create a tiling pattern
* Lecture: **[Pixel iteration and manipulation](/lecture-transformation)**
* Design exercise. Break into groups and come up with a final idea for:
  * A book cover
  * An event poster
  * A logo redesign

### Assignment for next week

From now on and until the end of the semester, we will be working on final projects. For next week, create a short presentation about your final project that speaks to:

* What is the content you're designing? (e.g. "I'm redesigning the logo for Bronx Zoo")
* What is the intended form of your project? (e.g. "It will be a generative logo that can fit each animal")
* What are your constraints? (e.g. "I will only use animal colors")

The presentation can only have 3 slides, with each of these questions plus and answer. You do not need to actually code or design anything. During your final presentations, I will give these slides to the guest critics to help them evaluate your project.

Week 11: Motion
---------------

Can a still image have movement? In this class we'll experiment with animation and movement in graphic design. We'll see what happens when we introduce physics in our graphic designs. Like a photograph is a snapshot of a moving world, so too can a printed graphic be a snapshot of a moving virtual world. 

### Class Overview

* Presentations of final project ideas
* Lecture: **[Computational Motion](/lecture-motion)**
* Work on final projects. I'll meet with each of you individually to talk through your project.

### Assignment for next week

For next week, you will approach your final project as a one-week assignment. You will code, generate and print a version of your final project, and bring it to class for design critique. We do this, so you cannot spend 3 weeks thinking about the idea, and 2 days implementing it. Good ideas come from good work.

Week 12: 3D
-----------

In the same way as motion can be used in the graphic arts, so too can 3D. Even though we are printing on paper, we can still simulate 3D in our code, twist and turn objects, and randomize the resulting print. We'll look at recent developments in graphic design and 3D, including 3-dimensional typefaces and logos.

* Presentations of first prints from final projects
* Lecture: **[3D](/lecture-3d)**

### Assignment for next week

You will now have 2 weeks to work on your final project, and I expect the final result to be worth 2 weeks of waiting. This means twice as much work as you've been doing in your 1-week assignments during the semester. Good luck!


Week 13 + 14: _Final Presentations_
--------------------------------

We will combine 2 classes into one long final class presentation. I will invite critics from the design, coding, and curating world, and you will each do a 6-8 minute presentation, followed by a short discussion.


Libraries
---------

* [Toxiclibs](http://toxiclibs.org/)
* [Geomerative](http://www.ricardmarxer.com/geomerative) is a library for computational geometry.


Recommended Readings
--------------------

These books might come in handy before, during or after the semester. You will not need to purchase or read these, but all of them are highly recommended reading.

* [Generative Design: Visualize, Program, and Create with Processing](http://amzn.to/Numea0) is one of the few recent books about algorithmic graphic art. It's pricey but really worth the money.
* [Creative Code by John Maeda](http://amzn.to/KspHn9)
* [Hackers and Painters by Paul Graham](http://amzn.to/AdZl6) is a great collection of essays revolving around the concept of the programmer as an artist. Many of the essays are available [on this website](http://bit.ly/1vUe)
* [Design by Numbers by John Maeda](http://bit.ly/MemEdj)
* [Designing Programmes by Karl Gerstner](http://amzn.to/K97iqQ)
* [Design, Form and Chaos by Paul Rand](http://bit.ly/KIgUdr)
* [A Designer's Art by Paul Rand](http://bit.ly/Lbq1Gl)
* [Type + Code by Yeohyun Ahn](http://bit.ly/NEFjFk) is a book from 2012 aiming to introduce Processing to designers.
* [Form + Code by Casey Reas, etc](http://formandcode.com/)
* [Dot Dot Dot Magazine](http://www.dot-dot-dot.us/) has some of the best new literature about the intersection of design and technology. It is no longer printed.
* [Bulletins of the Serving Library](http://www.servinglibrary.org/) is the new magazine that the DDD creators has started.
* [Elements of Typographic Style by Robert Bringhurst](http://amzn.to/17cWk9) Want to know about typefaces? This is the book.
* [The Interaction of Color by Josef Albers](http://amzn.to/NGs4R2). Want to know about color? This is the book.
* [A Little-Known Story About a Movement, a Magazine, and the Computer's Arrival in Art: New Tendencies and Bit International](http://mitpress.mit.edu/books/little-known-story-about-movement-magazine-and-computer%E2%80%99s-arrival-art)
* [Dynamic Identities in Cultural and Public Contexts](http://www.amazon.com/Dynamic-Identities-Cultural-Public-Context/dp/3037781637)


Recommended Websites
-----------------

* [Rules Based](http://rulesbased.wordpress.com)
* [Typeworship](http://typeworship.com)
* [Type Code](http://www.issuu.com/jpagecorrigan/docs/type-code_yeohyun-ahn)
* [Brand New](http://www.underconsideration.com/brandnew)
* [mlkshk geometric](http://mlkshk.com/geometric)
* [Subtraction: Grids are Good](http://www.subtraction.com/pics/0703/grids_are_good.pdf)
* [Smashing Magazine: Lessons from Swiss Style Graphic Design](http://www.smashingmagazine.com/2009/07/17/lessons-from-swiss-style-graphic-design/)
* [Relational Design](http://nevolution.typepad.com/theories/2011/03/a-relational-design-process-thesis.html)
* [Colour Lovers](http://www.colourlovers.com)
* [Geometry Daily](http://geometrydaily.tumblr.com/)
* [Random Number](http://randomnumber.nu/)
* [Computer Kunst](http://www.computerkunst.org/)

Studios / People
----------------

* [Sagmeister & Walsh](http://www.sagmeisterwalsh.com/)
* [Stefanie Posavec](http://www.itsbeenreal.co.uk/)
* [Onformative - Germany](http://www.onformative.com/)
* [E. Roon Kang](http://www.eroonkang.com/)
* [Laboratoire ORB](http://www.labo-irb.eu/)
* [JR Schmidt](http://cargocollective.com/jrschmidt/)
* [Alessandro Capozzo](http://www.abstract-codex.net/membranae/index.html)
* [Tim Reynolds](http://butdoesitfloat.com/It-is-easy-to-imagine-fantasy-as-physical-and-myth-as-real-We-do-it)
* [Adam Harvey](ahprojects.com)