---
layout:     default
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

Measurements, Measurements
--------------------------

<img src="{{ imageproxy_url }}/apple-2a13adfe5c9cd668597f83a33fa75f77.jpg"  />

<img src="{{ imageproxy_url }}/mondrianrules-9284081b353c936c9726ae307a6167c8.jpg"  />


History of Grid Systems
-----------------------

Grid systems started as helper lines for written books.

<img src="{{ imageproxy_url }}/gridhistory1-44aa9745f7d7efd5f73eab69473d7726.jpg"  />

It transferred to movable type, where the type setting itself consists of a grid. The grid lines continued to help printers in typesetting. This could often be as simple as a baseline that determined the scale of the headings and body.

<img src="{{ imageproxy_url }}/gridhistory2-abac11f9a686456de903dd53a75516b8.jpg"  />

With the industrial revolution came a huge demand for printed works. Many things, like slab-serif fonts, were concieved as a part of the advertising revolution. A grid system is here used to divide page space up into smaller segments, to use for advertising. The bigger the space, the more money the ad would cost.

<img src="{{ imageproxy_url }}/gridhistory3-7bc36afac3e9f65b39191dbba359f55c.jpg"  />

Movements like the Bauhaus and the Futurists investigated the use of grid systems, and how to play within these constraints. Here it's a page from the futurist magazine Lacerba.

<img src="{{ imageproxy_url }}/gridhistory4-b6997eaa7230927c0fa30eb3f5cf81aa.jpg"  />

The masters of the grid system - Swiss Style designers like Brockmann and Gerstner.

<img src="{{ imageproxy_url }}/brockmann-f31e92dcb07ab3c209701c8ab8055602.jpg"  />

<img src="{{ imageproxy_url }}/swiss-03b3d825ee03c478f8d0ca2b803a9af5.jpg"  />

<img src="{{ imageproxy_url }}/swiss2-6bc3c5c8d3b0490ae7471f6df102ec6d.jpg"  />

<img src="{{ imageproxy_url }}/gerstner-3a549ca7511a73fe258424d7e3fb66da.jpg"  />

Images found from <a href="http://www.graphics.com/modules.php?name=Sections&amp;op=viewarticle&amp;artid=620">this post</a>.


Types of Grids
--------------

A **manuscript grid** is the most basic form of a grid. It is made up by a single rectangle that defines the margins of the format.

<img src="{{ imageproxy_url }}/grid_manuscript-45c31f28f4d06d2f50f868f513e1de7f.jpg"  />

A **column grid** is what it says. It splits the page into columns, and is probably the most used grid type. Libraries like blueprint and 960.gs have ported the ideas of the column grid to the web. 

<img src="{{ imageproxy_url }}/grid_column-54d048acbae34b7df6e97fe75db6ec33.jpg"  />

The **modular grid** is a column and row grid that not only tells you the x-placements of your forms, but also guides on the y-axis.

<img src="{{ imageproxy_url }}/grid_modular-44b06b7affb762ec6787a46e0f2ed52e.jpg"  />

The last type of grid is often called a **hierarchical grid**, although it's kind of a "catch all" for grids that do not fit into the above categories. A hierarchical grid is described by not having equal spacing between modules.

<img src="{{ imageproxy_url }}/grid_hierarchical-efc444ed8114f85e742fdea673e01ad9.jpg"  />


Grid Examples
-------------

<img src="{{ imageproxy_url }}/brockmanngrid-7d9be89211159fcdffcc0e617de38581.jpg"  />

<img src="{{ imageproxy_url }}/brockmanngrid2-0d5d8461ed7b824a30930cfe3dcb00c7.jpg"  />

<img src="{{ imageproxy_url }}/grid1-77659318f4ed12db74afc61a166541d7.jpg"  />

<img src="{{ imageproxy_url }}/grid2-3c21e7daed4b6408ea21f103f799d7dd.jpg"  />

<img src="{{ imageproxy_url }}/grid3-3385bab41d9cb331391723c3f336c62d.jpg"  />

<img src="{{ imageproxy_url }}/grid4-a5e07010b25b989ea7d94172b4ba1b75.jpg"  />

<img src="{{ imageproxy_url }}/grid5-6e16b8cc81c7fb843513ddffe9fceae3.jpg"  />


Using a Grid
------------

The grid systems were made popular with the wave of Swiss Style graphic design. The point is to work creatively within the grid, but also break free when you need it.

Even a simple grid gives you a lot of variety in placing your content. You use the modules as basis for larger content areas. This creates alignment and balance in your design.

<img src="{{ imageproxy_url }}/grid_modular_filled1-e4c6bc43aede06582e6ef0ee262ccf45.jpg"  />

<img src="{{ imageproxy_url }}/grid_modular_filled2-3981a632743ce8f6d4c7fecfca5ca133.jpg"  />

<img src="{{ imageproxy_url }}/grid_modular_filled3-afa545ef29c935df230aabed22abb7bc.jpg"  />


Int vs. Float
-------------

Before we start diving into code examples, we need to clarify a simple thing about calculations in Processing. When we work with division of larger numbers into smaller numbers, it's important always to use floats instead of ints. Variables like `width` and `height` must also be cast into floats (by putting (float) in front of it). Why? This code example shows you why.

<img src="{{ imageproxy_url }}/wrong_calculations-0b59a3dfc1854463c80a2317151a0f1b.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/grid/wrong_calculations)


Coding a Manuscript Grid
------------------------

<img src="{{ imageproxy_url }}/grid_manuscript-45c31f28f4d06d2f50f868f513e1de7f.jpg"  />

The simplest possible grid to make is a manuscript grid that only requires 4 variables: x,y,width,height to define the rectangle in which we place content.

<img src="{{ imageproxy_url }}/grid_manuscript_example-e44f5636e9d73d84deceb1af9f0c0bd8.jpg"  />
[Not Using Classes - Example on Github](https://github.com/runemadsen/printing-code/tree/master/grid/manuscript_grid_no_class)  
[Using Classes - Example on Github](https://github.com/runemadsen/printing-code/tree/master/grid/manuscript_grid_class)

Here's another example, where I'm placing circles inside the grid using the manuscript column.

<img src="{{ imageproxy_url }}/manuscript_grid_circles-0f23af06eb641a5a20a0f1dd319e8675.png"  />
[Not Using Classes - Example on Github](https://github.com/runemadsen/printing-code/tree/master/grid/manuscript_grid_circles) 

A nice way of encapsulating these 4 variables is by creating a class that can keep track of them and hide them from the main file. He I've created a _Column_ class to hold the column values. Nothing else changed. By extracting the grid code into a class we can add convenient helper methods to that class without cluttering out main source file.

Very simple Processing Code


Coding a Column Grid
--------------------

<img src="{{ imageproxy_url }}/grid_column-54d048acbae34b7df6e97fe75db6ec33.jpg"  />

<img src="{{ imageproxy_url }}/grid_column_example-f57a616efdd1869d955b4dbadc12ece5.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/grid/column_grid)

<img src="{{ imageproxy_url }}/grid_column_random_example-0d5fbb2fe555f91fe0042477687f86c6.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/grid/column_grid_random_placement)

Here's the same circle example, just using the column grid code.

<img src="{{ imageproxy_url }}/column_grid_circles-110257317884311a46692d2bfc112d67.png"  />
[Not Using Classes - Example on Github](https://github.com/runemadsen/printing-code/tree/master/grid/column_grid_circles) 

Coding a Modular Grid
---------------------

<img src="{{ imageproxy_url }}/grid_modular-44b06b7affb762ec6787a46e0f2ed52e.jpg"  />

<img src="{{ imageproxy_url }}/grid_modular_example-95297f9c4a22aeb3e066c547b45af312.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/grid/modular_grid_simple)

Here's the same circle example, just using the modular grid.

<img src="{{ imageproxy_url }}/modular_grid_circles-e562cc8a424fb9d736492e49e9ee8fb6.png"  />
[Not Using Classes - Example on Github](https://github.com/runemadsen/printing-code/tree/master/grid/modular_grid_circles) 


What is Used? What is Not?
--------------------------

The big problem is that we do not know what is used and what is not. If we randomly select a modules, we'll end up selecting the same module over and over. This can be solved by adding a "used" boolean to the module class and only selecting modules that are not used.

<img src="{{ imageproxy_url }}/grid_no_overlap-fc0d2ec69a2f8d3214b59870bda83b9e.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/grid/modular_grid_no_overlap)


Karl Gerstner's Flexible Grid
-----------------------------

Even though it's quite some years ago now, Karl Gerstner is one of the few graphic designers who approached grid design from a programmable point of view.

<img src="{{ imageproxy_url }}/gerstner0-ceb08c88df5b3ec498c08938ba8fbde5.jpg"  />

<img src="{{ imageproxy_url }}/gerstner1-39a016020da69cdfde89178c35ac7017.jpg"  />

<img src="{{ imageproxy_url }}/gerstner2-b35ac37eddc492709b484b3713eaa8c7.jpg"  />

<img src="{{ imageproxy_url }}/gerstner3-b692262b635861612a56945393706e30.jpg"  />

<img src="{{ imageproxy_url }}/gerstner4-9361a4c1b2b13d8dc73d4da2eb9eba93.jpg"  />

<img src="{{ imageproxy_url }}/gerstner5-6ac06b56cac619574a47bd87681f11f0.jpg"  />

<img src="{{ imageproxy_url }}/gerstner6-7295b8ec54320c9f45ab8c1fa79d2545.jpg"  />

<img src="{{ imageproxy_url }}/gerstner8-4c67da0ff7111c283459dedeb1b78c18.jpg"  />

<img src="{{ imageproxy_url }}/gerstner9-d62933497f63d45a7649cd9a061ec3ff.jpg"  />

<blockquote >
<p>Grids can turn design into a simple act of placement of elements into a series of column. While this can provide the consistency, grids can be a trap for designers; creating uninspired, homogenous layouts. This is especially the case with simple grids. For Capital, Gerstner developed a complex grid which was flexible and allowed rapid, creative and consistent layouts. As a grid grows in complexity, it provides “a maximum number of constants with the greatest possible variability.</p>

<p>The grid looks incredibly complex at first, but upon examination, shows itself as a number of grids overlaid upon each other. While each grid overlay was often used separate, they were designed so if columns were mixed together, they would still maintain a harmony between each other. This way the magazine’s layout is consistent from page to page and between the different grid versions, separate or combined.</p>
</blockquote>
Source: [aisleone.net](http://www.aisleone.net/2010/design/celebrating-karl-gerstner/)

This concept of multiple grids is extremely powerful, and seems to be a perfect fit for the computer.


Multiple Grids
--------------

Gerstner for Capital. Needed a flexible grid that provided flexibility across all platforms and types of materials, but still bullet-proof so designers would not mess up the company identity. He used a combination of multiple grids to do this.

<img src="{{ imageproxy_url }}/gerstner_capital1-575d42ca7e8dff0ae17b5a97e9b834c1.jpg"  />

<img src="{{ imageproxy_url }}/gerstner_capital2-c4ae2f3089d0b0c2ab1dfaa9d38f17fe.jpg"  />

<img src="{{ imageproxy_url }}/gerstner_capital3-6f5648da6a07106a5b65530d5f38da5e.jpg"  />

<img src="{{ imageproxy_url }}/gerstner_capital4-9510c4125454fe7f389c41492892b104.jpg"  />

<img src="{{ imageproxy_url }}/gerstner_capital5-228a6d4abbb9b5f732bb698b9e79579d.jpg"  />

<img src="{{ imageproxy_url }}/gerstner_capital6-e3f25c730b09902608b56cc29a31d71f.jpg"  />

<img src="{{ imageproxy_url }}/gerstner_capital7-0cd34f29186206d1fb4ee7e6b80311b3.jpg"  />

<img src="{{ imageproxy_url }}/gerstner_capital8-472ee2cad73211cec50816c7daf36ab0.jpg"  />

<img src="{{ imageproxy_url }}/gerstner_capital9-f597f79f7b6f26d1d021cd21d5dc491b.jpg"  />

In code, it's amazingly easy to make something with multiple grids. Here's an example with the column grid and modular grid code combined into the smae processing sketch.

<img src="{{ imageproxy_url }}/grid_multiple-8dbea3a68f21c3e2b34b6814e90543a5.jpg"  />

<img src="{{ imageproxy_url }}/grid_multiple2-24f75c133cce0f76d8c8f4d06ba8d316.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/grid/grid_multiple)

Here's a pretty ugly example illustrating multiple grids:

<img src="{{ imageproxy_url }}/grid_multiple_bruce-fabf5694633422eb2dcb42a480cb813d.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/grid/grid_multiple_bruce)


Random Grids
------------

Until now we have only used randomness to place objects within a static grid. But what if we want to randomly create the grid ever time the program runs? This is of course very simple, as we just replace the static numbers in the constructor with random numbers. Here it's our modular grid example with random numbers.

<img src="{{ imageproxy_url }}/grid_modular_random-f7cb96c790ec75945afba10be132b356.jpg"  />

<img src="{{ imageproxy_url }}/grid_modular_random2-a174fa9e47c71998da4468737a5cf547.jpg"  />

<img src="{{ imageproxy_url }}/grid_modular_random3-291bbbfd861286313e15b119dba2d283.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/grid/modular_grid_random)


We can also play around with the column grid so each column has a random width. This makes for some interesting outputs. The only slightly difficult think is calculating the normalized values of the columns.

<img src="{{ imageproxy_url }}/random_columns-ae78ea05ff9ccedb9a656f7dfc79a13d.jpg"  />
	
<img src="{{ imageproxy_url }}/random_columns2-f19daab6670f027501db4d428a4cf023.jpg"  />
	
<img src="{{ imageproxy_url }}/random_columns3-d9f549695da10ca7fba321abe68cb611.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/grid/column_grid_random_columns)


We have already looked at how we can choose random placements in a modular grid without ever picking the same module. But what if we want to have larger random areas that span across multiple modules? 

<img src="{{ imageproxy_url }}/random_grid5-409f028888202606203ee90fb982ba02.jpg"  />

<img src="{{ imageproxy_url }}/random_grid6-c537ce284a2e47fa66efc2805de70e7e.jpg"  />

<img src="{{ imageproxy_url }}/random_grid4-b77967a85881a506f0b64439a5aeb36a.jpg"  />

<img src="{{ imageproxy_url }}/random_grid-531604918281dd1843bc567a2db63a48.jpg"  />

<img src="{{ imageproxy_url }}/random_grid2-9c45b52e0441c5a25fca4f4875913116.jpg"  />

<img src="{{ imageproxy_url }}/random_grid3-855a9b76e09607edc944b0fc305ba45a.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/grid/modular_grid_no_overlap_random_size)