---
layout: default
title: Rune Madsen
---

About the class
===============

**Printing Code** is a graduate course focused on programming design systems. Class time is divided between design topics like color, grid systems, and typography, and more computational topics like randomization, repetition, transformation and generative form. The students work to write software that abstract these design theories into code, and print the output on paper for design critique.

Weekly readings include relevant writings from the history of graphic design ([Josef Muller-Brockmann](http://bit.ly/KR2jkA), [Paul Rand](http://bit.ly/KzNyhy)), articles from the history of computation ([Vannevar Bush](http://bit.ly/9Zat9h), [Douglas Englebart](http://bit.ly/B4HDX)) and everything in between ([Sol Lewitt](http://bit.ly/BX1iy), [Edward Tufte](http://bit.ly/49i1Xj)).

Weekly homework can be produced using the digital printers at [NYU’s Advanced Media Studio](http://bit.ly/Krjjhh), however students are encouraged to utilize whatever physical printing techniques they prefer, that being stencils, letter press, silk screen, weaving or home-made printers.

The class aims not only to teach the students how to create physical prints via code, but also to have something interesting to say about it. The class requires ICM or similar programming background.

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

Until recently, the term Graphic Designer was used to describe artists firmly rooted in the fine arts. Aspiring design students graduated with MFA degrees, and their curriculums were based on traditions taught by painting, sculpture and architecture. Paul Rand once famously said: *"It’s important to use your hands. This is what distinguishes you from a cow or a computer operator"*. At best, this teaches the designer not to be dictated by their given tool. At worst, the designer is institutionalized to think of themselves as ideators: the direct opposite to a technical person.

This has obviously changed with the advent of computers (and the field of web design in particular), but not to the degree that one would expect. Despite recent efforts in defining digital-first design vocabularies, like Google’s Material Design, the legacy of the printed page is still omnipresent. Even the most adept companies are organized around principles inherited from desktop publishing, and, when the lines are drawn, we still have separate design and engineering departments. Products start as static layouts in the former and become dynamic implementations in the latter. Designers use tools modeled after manual processes that came way before the computer while engineers work in purely text-based environments. I believe this approach to design will change in a fundamental way and, like Donald Knuth, I’ll call this the transition from design to meta-design.

So what is meta-design? In a traditional design practice, the designer works directly on a design product. Be it a logo, website, or a set of posters, the designer is the instrument to produce the final artifact. A meta-designer works to distill this instrumentation into a design system, often written in software, that can create the final artifact. Instead of drawing it manually, she is programming the system to draw it. These systems can then be used within different contexts to generate a range of design products without much effort.

[Read more](http://runemadsen.com/blog/on-meta-design-and-algorithmic-design-systems/)


Week 1: Hello World
-------------------

> Beauty is a function, after all, of any relevant visual message. Just as prose can be dull and straight-forward or well edited and lyrical, so too can a utilitarian object be designed to be more than just simply what it is.
>
>*Timothy Samara, Design Elements*

In this class we'll introduce ourselves, and talk a little bit about the class, graphic design and computation. Please read these texts before coming to the first class.

### Readings for this week

* [Form + Content](http://assets.runemadsen.com/rand_form_content.pdf) by Paul Rand (Design, Form and Chaos)
* [Software Structures](http://artport.whitney.org/commissions/softwarestructures/text.html) by Casey Reas
* [On meta-design and algorithmic design systems](http://runemadsen.com/blog/on-meta-design-and-algorithmic-design-systems/) by Rune Madsen

### Class Overview

* Introductions
* [About the class](/about-the-class)
* Syllabus Walk-Through
* Lecture: **[The History of Graphic Design and Computational Form](/lecture-intro)**
* Introduction to [Rune.js](http://runemadsen.github.io/rune.js/)

### Assignment for next week

* Please join the [Printing Code Google Group](https://groups.google.com/forum/?fromgroups#!forum/printing-code)
* Set up a Github repository where you'll post all your code. Send me an email with the link.
* On ITP's laser printer, print a PDF file generated via a Processing sketch. A few rules about your code: You can only use black (0) and white (255). You are only allowed to use triangle(), rect() and ellipse() once each, and no other drawing functions are allowed (no beginShape or images). Bring to class a design of an ice cream cone. Yes, an ice cream cone.
* Read [Paul Rand - Conversations with Students](http://assets.runemadsen.com/rand_conversations.pdf)

Week 2: Form 1
--------------

> Without aesthetic, design is either the humdrum repetition of familiar cliches or a wild scramble for novelty. Without the aesthetic, the computer is but a mindless speed machine, producing effects without substance. Form without relevant content, or content without meaningful form.
>
> _Paul Rand_

This week we'll take our first step into design theory by looking at basic shapes. We'll talk about techniques for creating shapes in Rune.js, look at examples from the history of graphic design, and introduce basic ways of using randomization and repetition.

### Class Overview

* Homework presentations
* Lecture: **[Basic shapes and relationships](/lecture-form)**
* [Preparing your image for AMS](/preparing-for-ams)

### Assignment for next week

* Write a Processing sketch that outputs 2 shapes on a page. The first shape should be inspired by the word "wet". The second shape should be inspired by the word "sharp".  Use only black and white. You have to use beginShape(), and all vertex points have to be created in a for loop. No manual plotting. Print on a poster at AMS and bring to class for design critique.


Week 3: Form 2
--------------

This week we'll look at more complex shapes, and how you can use algorithms to generate a multitude of expressions.

### Class Overview

* Homework presentations
* Lecture: **[Complex shapes](/lecture-form-2)**

### Assignment for next week

TODO


Week 4: Color
-------------

In this class we'll dive into color theory and look at color handling in Processing. We'll talk about the history of color, the difference between RGB and HSB, and investigate how to generate color schemes in code.

* Homework design critique
* Lecture: **[Computational Color](/lecture-color)**
* Design exercise: Make something ugly. In Processing, draw 3 squares inside each other, and color them in a 3-color theme that you don't like. Tell us why.

### Assignment for next week

* TODO


Week 5: Typography
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


Week 6: Grid Systems
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

Week 7: Logo
------------

To make a well-designed logo requires skills in form, color, type and grid. We'll look at everything from traditional logos to organic, computational logos, and we'll go through different techniques for making generative logos in Processing. This week's assignment is a 1 week midterm project.

### Class Overview

* Homework design critique: Neighbour explains
* Lecture: **[Dynamic Logos](/lecture-logo)**

### Assignment for next week

* For next week write a Processing sketch that outputs a logo for a specific entity, that being a person, group, company, etc. If in doubt, design a logo for ITP. The logo needs to be organic, which means that it has some sort of dynamic expressions. This doesn't mean that it needs to be completely random every time you run the sketch, but it needs to be able to have a range of expressions that can easily be tweaked by changing the variables in the sketch. Bring to class a poster with the same logo printed 3 times in different expressions. For example, if you're designing a logo for ITP, you could have a variation for ITP, one for the ITP Show, and one for ITP Camp. These would look slightly different, but be the output of the same code. Think about form, color, typography and grids before you start coding, and make a strategy. Think. Again, keep it simple. You only have one week. This is a great time to find something in the real world that needs a redesign (your friends' band, a festival, [Arlington Pedriatic Center](http://lh6.ggpht.com/_hVfE2qcyzXU/TMrsVCMfiWI/AAAAAAAAA4Q/o-4G45KsrZo/s800/logo-design-fail-arlington.jpg)... you name it).
* Read [Hackers and Painters](http://www.paulgraham.com/hp.html) by Paul Graham and [Design and the Play Instinct](http://www.reocities.com/paciunia/paulrandsbook.pdf) by Paul Rand.


Week 8: _Midterm Presentations_
--------------------------------

This week will be midterm presentations.


Week 9: Randomization
---------------------

Randomization is about letting the computer choose for us. This week we'll look at ways to create programs that create unique graphics. We'll look at basic randomness, Perlin noise, and how a simple thing like randomness can help you create unexpected things.

### Class Overview

* Reading discussion
* Lecture: **[Randomization](/lecture-randomization)**
* [Vectors](/pvector)
* [Geomerative](/geomerative)


### Assignment for next week

* For next week pick an existing piece of visual art (painting, ad, etc) that uses randomization as a key design principle, and recreate it in Processing. If in doubt, use [one of these famous Olivetti posters](/posters). You should use at least some randomization concepts from this week's lecture in your sketch, in order to make the sketch dynamic. This means that it needs to look different every time it runs, but still have the visual style of the original work. Come to class prepared to show your print + to share how your sketch uses randomization. I'm looking for the simplest possible implementation, which means that it's up to you to set goals that are simple enough for you have time to code and print the assignment.


Week 10: Repetition
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

From now on and until the end of the semester, we will be working on final projects. For next week, pick a real-world design problem that you will tackle for your final. This can be an event poster, an album cover, a logo re-design, a full company identity, a book cover, or something else completely. It's all up to you, and there are no constraints. Make a short presentation about your final project that speaks to:

* What is the content you're designing? (e.g. "I'm redesigning the logo for Bronx Zoo")
* What is the intended form of your project? (e.g. "It will be a generative logo that can fit each animal")
* What are your constraints? (e.g. "I will only use animal colors")

The presentation can only have 3 slides, with answers to these questions. You do not need to actually code or design anything. Remember, you cannot change your final project once you've given this presentation.


Week 11: Transformation
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

For next week, you will approach your final project as a one-week assignment. You will code, generate and print a version of your final project, and bring it to class for design critique. We do this, so you cannot spend 3 weeks thinking about the idea, and 2 days implementing it. Good ideas come from good work.

Week 12: Motion
---------------

Can a still image have movement? In this class we'll experiment with animation and movement in graphic design. We'll see what happens when we introduce physics in our graphic designs. Like a photograph is a snapshot of a moving world, so too can a printed graphic be a snapshot of a moving virtual world. 

### Class Overview

* Presentations of final project ideas
* Lecture: **[Computational Motion](/lecture-motion)**
* Work on final projects. I'll meet with each of you individually to talk through your project.

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