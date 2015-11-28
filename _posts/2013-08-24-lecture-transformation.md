---
layout:     [default, slides]
title:      Transformation
date:       2013-08-24 19:15:22
categories: printing-code
---

Transformation
==============

<blockquote >
Transformation refers to the fact of manipulating a preexisting form to create something new - Form+Code
</blockquote>

In this class we'll look at pixel iteration in JavaScript.

Transformation in Graphic Design
--------------------------------

Tomoko Miho, Architecture in Chicago

{% picture miho-28f5cd00460e1d9a870e656151dfa66c.jpg %}

Adam Harvey's Spam Art

{% picture spamart1-fd65857c7515378b9b3075c5f7f62f04.jpg %}

{% picture spamart2-9adc69331af482d18709dc354514dc9a.jpg %}

Jonathan Puckeys graphic image filters

{% picture puckey-09b4f4c484109262f488f6955cf519d1.jpg %}


Bits and Bytes
--------------

Before diving into pixel iteration, we have to know a little bit about pixel color values.

Have you ever thought about why color values always go to 255? Take a look at the color palette in Photoshop.

{% picture photoshop-623e3e8b8db0039dd81e3b1b732e428d.jpg %}

... or take a look at color values in Processing. It's all 0-255.

{% picture processing-3aa1b4ed27ae61c04efd8d4cca359b52.jpg %}

It all comes down to the basic way a computer works. You've probably heard that a computer can only think in ones and zero's. This means that all your data is just a bunch of zeros ...

{% picture bit0-fc7d3f405052851aaa23c2bcf6177c2f.jpg %}

... and ones ...

{% picture bit1-65f131955af05a84dba691f0122a393c.jpg %}

... saved on your harddisk. This is called a **Bit**. A computer will always group these bits into groups of 8, called a **Byte**.

{% picture bitcount0-5078a40bebf4f57eac63d97d507144f2.jpg %}

You can count in the binary numeral system exactly like you can count in the Arabic number system. Here's how.

**0**

{% picture bitcount0-5078a40bebf4f57eac63d97d507144f2.jpg %}

**1**

{% picture bitcount1-b377822cdce2e986c3efa63223658fb0.jpg %}

**2**

{% picture bitcount2-694e534112745c66381a9e8db90a7fc1.jpg %}

**3**

{% picture bitcount3-68a7e9e1de1ccb826fba11dfb07727fb.jpg %}

**4**

{% picture bitcount4-1bafb53093e10b8f2df77c6372017e1c.jpg %}

**5**

{% picture bitcount5-8249dffc9c005d5cdb516909a4aacdec.jpg %}

**6**

{% picture bitcount6-be46f95fd6c61f30a72f90c523888705.jpg %}

... and so on. If you count all the up, so you fill the byte with 1's, you'll end up with the number 255.

{% picture bitcount255-c613f85d554fcc615d7506c8734a7134.jpg %}

That's why you see the number 255 used for colors. It's the highest number that can fit in one byte. If you want to test this for yourself, you can use the binary() function in Processing to convert a number to its byte representation.

{% picture processing2-f81c2d0e9bcc33836ea225f4db7661c9.jpg %}

When we manipulate pixels, we're essentially pulling out these byte values from the image files and manipulating them by either changing them directly in the image pixels, or using the color values to draw something on the screen.


Pixel Iteration
---------------

Here's how to loop over image pixels with Rune.js. Keep in mind that drawing images like this in SVG is very slow.

{% picture loop_rgb-6bb28d9cc82d7e8af8c5f5146f34ed9f.png %}

[See example code](../examples/transformation/pixel_iteration.html)


Pixel Manipulation
------------------

You can use `.get(x, y)` to get a color object and manipulate the color before drawing.


From Pixels to Shapes
---------------------

Now that we have the ability to manipulate pixels form an image, let's investigate what we can create if we don't just update the pixel values, but use those values to draw shapes on the screen instead.

Here's an example of using our basic tile pattern from last class, but extracting the pixel values from the image:

![Pixel image](http://assets.runemadsen.com/pixel-pattern-0ffd267d600a4ad8bdd8990805025e69.svg)

[See example code](../examples/transformation/pixel_pattern.html)
