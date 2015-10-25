---
layout:     [default, slides]
title:      Grid Systems
date:       2013-08-24 19:15:22
categories: printing-code
---

What is a grid system?
======================

There is nothing worse for an artist than a blank canvas. A grid system is a set of measurements a graphic designer can use to align and size objects within the given format. Although there are a few different categories of grid systems, there are no strict rules on what can or cannot be a grid. It's up to you. Any guides that help you shape the final design is okay.

Relevant for us is how the grid is such a strict mathematical concept. It's perfect for manipulation in code. The traditional way of creating a grid is by doing it by hand in Photoshop or Illustrator. If you suddenly notice that you want a slimmer grid, you need to re-create the grid and move everything by hand. In code this is not the case, a we can be extremely flexible and try many iterations within minutes. It also allows us to use several grid systems on top of each other, distort the grid system by rotating or scaling it, or generating the grid modules randomly. 

The concept of a generative grid system is extremely powerful, but also extremely underused. Even a simple thing like a flexible grid program is non-existent today. 

Today we'll go through the different types of grid systems, look at interesting examples, and look at how we can create and manipulate grid systems in code. If you feel like it, read [this brief introduction to the history of grid](http://www.graphics.com/modules.php?name=Sections&op=viewarticle&artid=620).

A grid system is any kind of basic constraint you can put on the canvas.


History of Grid Systems
-----------------------

Grid systems started as helper lines for written books.

{% picture gridhistory1-44aa9745f7d7efd5f73eab69473d7726.jpg %}

It transferred to movable type, where the type setting itself consists of a grid. The grid lines continued to help printers in typesetting. This could often be as simple as a baseline that determined the scale of the headings and body.

{% picture gridhistory2-abac11f9a686456de903dd53a75516b8.jpg %}

With the industrial revolution came a huge demand for printed works. Many things, like slab-serif fonts, were concieved as a part of the advertising revolution. A grid system is here used to divide page space up into smaller segments, to use for advertising. The bigger the space, the more money the ad would cost.

{% picture gridhistory3-7bc36afac3e9f65b39191dbba359f55c.jpg %}

Movements like the Bauhaus and the Futurists investigated the use of grid systems, and how to play within these constraints. Here it's a page from the futurist magazine Lacerba.

{% picture gridhistory4-b6997eaa7230927c0fa30eb3f5cf81aa.jpg %}

The masters of the grid system - Swiss Style designers like Brockmann and Gerstner.

{% picture brockmann-f31e92dcb07ab3c209701c8ab8055602.jpg %}

{% picture swiss-03b3d825ee03c478f8d0ca2b803a9af5.jpg %}

{% picture swiss2-6bc3c5c8d3b0490ae7471f6df102ec6d.jpg %}

{% picture gerstner-3a549ca7511a73fe258424d7e3fb66da.jpg %}

Images found from <a href="http://www.graphics.com/modules.php?name=Sections&amp;op=viewarticle&amp;artid=620">this post</a>.


Types of Grids
--------------

A **manuscript grid** is the most basic form of a grid. It is made up by a single rectangle that defines the margins of the format.

{% picture grid_manuscript-45c31f28f4d06d2f50f868f513e1de7f.jpg %}

A **column grid** is what it says. It splits the page into columns, and is probably the most used grid type. Libraries like blueprint and 960.gs have ported the ideas of the column grid to the web. 

{% picture grid_column-54d048acbae34b7df6e97fe75db6ec33.jpg %}

The **modular grid** is a column and row grid that not only tells you the x-placements of your forms, but also guides on the y-axis.

{% picture grid_modular-44b06b7affb762ec6787a46e0f2ed52e.jpg %}

The last type of grid is often called a **hierarchical grid**, although it's kind of a "catch all" for grids that do not fit into the above categories. A hierarchical grid is described by not having equal spacing between modules.

{% picture grid_hierarchical-efc444ed8114f85e742fdea673e01ad9.jpg %}


Grid Examples
-------------

{% picture brockmanngrid-7d9be89211159fcdffcc0e617de38581.jpg %}

{% picture brockmanngrid2-0d5d8461ed7b824a30930cfe3dcb00c7.jpg %}

{% picture grid1-77659318f4ed12db74afc61a166541d7.jpg %}

{% picture grid2-3c21e7daed4b6408ea21f103f799d7dd.jpg %}

{% picture grid3-3385bab41d9cb331391723c3f336c62d.jpg %}

{% picture grid4-a5e07010b25b989ea7d94172b4ba1b75.jpg %}

{% picture grid5-6e16b8cc81c7fb843513ddffe9fceae3.jpg %}


Using a Grid
------------

The grid systems were made popular with the wave of Swiss Style graphic design. The point is to work creatively within the grid, but also break free when you need it.

Even a simple grid gives you a lot of variety in placing your content. You use the modules as basis for larger content areas. This creates alignment and balance in your design.

{% picture grid_modular_filled1-e4c6bc43aede06582e6ef0ee262ccf45.jpg %}

{% picture grid_modular_filled2-3981a632743ce8f6d4c7fecfca5ca133.jpg %}

{% picture grid_modular_filled3-afa545ef29c935df230aabed22abb7bc.jpg %}


Coding a Manuscript Grid
------------------------

![Manuscript grid](http://assets.runemadsen.com/grid_manuscript-66ba3e407bb6e64ecadb75feba6c7826.svg)

[See example code](../examples/grid/grid_manuscript.html)


Coding a Column Grid
--------------------

![Column grid](http://assets.runemadsen.com/grid_column-042e9d5360a89854882771ddee96598f.svg)

[See example code](../examples/grid/grid_column.html) 

Coding a Modular Grid
---------------------

![Modular grid](http://assets.runemadsen.com/grid_modular-6ed764743f80198f45a92f2b74f11ba2.svg)

[See example code](../examples/grid/grid_modular.html) 


Karl Gerstner's Flexible Grid
-----------------------------

Even though it's quite some years ago now, Karl Gerstner is one of the few graphic designers who approached grid design from a programmable point of view.

{% picture gerstner0-ceb08c88df5b3ec498c08938ba8fbde5.jpg %}

{% picture gerstner1-39a016020da69cdfde89178c35ac7017.jpg %}

{% picture gerstner2-b35ac37eddc492709b484b3713eaa8c7.jpg %}

{% picture gerstner3-b692262b635861612a56945393706e30.jpg %}

{% picture gerstner4-9361a4c1b2b13d8dc73d4da2eb9eba93.jpg %}

{% picture gerstner5-6ac06b56cac619574a47bd87681f11f0.jpg %}

{% picture gerstner6-7295b8ec54320c9f45ab8c1fa79d2545.jpg %}

{% picture gerstner8-4c67da0ff7111c283459dedeb1b78c18.jpg %}

{% picture gerstner9-d62933497f63d45a7649cd9a061ec3ff.jpg %}

<blockquote >
<p>Grids can turn design into a simple act of placement of elements into a series of column. While this can provide the consistency, grids can be a trap for designers; creating uninspired, homogenous layouts. This is especially the case with simple grids. For Capital, Gerstner developed a complex grid which was flexible and allowed rapid, creative and consistent layouts. As a grid grows in complexity, it provides “a maximum number of constants with the greatest possible variability.</p>

<p>The grid looks incredibly complex at first, but upon examination, shows itself as a number of grids overlaid upon each other. While each grid overlay was often used separate, they were designed so if columns were mixed together, they would still maintain a harmony between each other. This way the magazine’s layout is consistent from page to page and between the different grid versions, separate or combined.</p>
</blockquote>
Source: [aisleone.net](http://www.aisleone.net/2010/design/celebrating-karl-gerstner/)

This concept of multiple grids is extremely powerful, and seems to be a perfect fit for the computer.


Multiple Grids
--------------

Gerstner for Capital. Needed a flexible grid that provided flexibility across all platforms and types of materials, but still bullet-proof so designers would not mess up the company identity. He used a combination of multiple grids to do this.

{% picture gerstner_capital1-575d42ca7e8dff0ae17b5a97e9b834c1.jpg %}

{% picture gerstner_capital2-c4ae2f3089d0b0c2ab1dfaa9d38f17fe.jpg %}

{% picture gerstner_capital3-6f5648da6a07106a5b65530d5f38da5e.jpg %}

{% picture gerstner_capital4-9510c4125454fe7f389c41492892b104.jpg %}

{% picture gerstner_capital5-228a6d4abbb9b5f732bb698b9e79579d.jpg %}

{% picture gerstner_capital6-e3f25c730b09902608b56cc29a31d71f.jpg %}

{% picture gerstner_capital7-0cd34f29186206d1fb4ee7e6b80311b3.jpg %}

{% picture gerstner_capital8-472ee2cad73211cec50816c7daf36ab0.jpg %}

{% picture gerstner_capital9-f597f79f7b6f26d1d021cd21d5dc491b.jpg %}

In code, it's amazingly easy to make something with multiple grids. Here's an example with the column grid and modular grid code combined into the same sketch.

![Multiple grids](http://assets.runemadsen.com/grid_multiple-cc2e823ea42e519c605bead258f018ea.svg)

[See example code](../examples/grid/grid_multiple.html)


Grid transformation
-------------------

Grids can rotate and move like every other shape object.

![Rotate grid](http://assets.runemadsen.com/grid_rotate-0f6df96470a46ddb370ff940164c2083.svg)

[See example code](../examples/grid/grid_rotation.html)

