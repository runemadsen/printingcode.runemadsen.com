---
layout:     default
title:      Transformation
date:       2013-08-24 19:15:22
categories: printing-code
---

Transformation
==============

<blockquote >
Transformation refers to the fact of manipulating a preexisting form to create something new - Form+Code
</blockquote>

In this class we'll look at transformations in Processing, especially picel manipulation and how it relates to repetition.

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

Looping over an image pixels in RGB color mode.

{% picture loop_rgb-6bb28d9cc82d7e8af8c5f5146f34ed9f.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/transformation/loop_rgb)

Looping over an image pixels in HSB color mode.

{% picture loop_rgb-6bb28d9cc82d7e8af8c5f5146f34ed9f.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/transformation/loop_hsb)


Pixel Iteration with Bitshifting
--------------------------------

You might experience that these color functions are super slow. Now that we know about bites, we can use a tehnique called bitshifting to get the color values. This is a much faster way of getting pixel colors, and even though it looks a little cryptic, it's somehow simple.

{% picture loop_rgb-6bb28d9cc82d7e8af8c5f5146f34ed9f.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/transformation/loop_rgb_bitshifting)

Bitshifting is much, much faster than using the color functions, however, it will always return values in RGB. Here's an example of how to use bitshifting in HSB colormode with the Toxiclibs TColor class.

{% picture loop_rgb-6bb28d9cc82d7e8af8c5f5146f34ed9f.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/transformation/loop_hsb_bitshifting)


Pixel Manipulation
------------------

{% picture manipulate_invert-813a18042d56bf535e67250188d84721.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/transformation/manipulate_invert)

This is a very simple example, because we just invert the color. However, if we want to manipulate the individal colors, we know that HSB is a much better colormode. Here's an example of how to manipulate the colors by spinning around the HSB wheel.

{% picture manipulate_tcolor-fd4590ce9c74bdf21947340b3f384564.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/transformation/manipulate_tcolor)

Now that we're in Toxiclibs land, we can do all sorts of cool things. For example, here's an example of changing the pixels in an image to the closest color in a Colorlist.

{% picture manipulate_colorlist-185e7f03342c5da4b6055f19762acb2b.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/transformation/manipulate_colorlist)

There's also a great Histogram class in the Toxiclibs library that allows you to get a list of colors in an image. Here's the exact same example using a histogram to get a colorlist based on the picture.

{% picture manipulate_histogram-18697ff79640274fabdc7781806c2e4a.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/transformation/manipulate_histogram)

Of course you can do other fun stuff with the histogram, like drawing a background with colors based on the colors in the image.

{% picture manipulate_histogram_bg-e9c86b6ba7791a052a1239c2bba6d2b7.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/transformation/manipulate_histogram_bg)


From Pixels to Shapes
---------------------

Now that we have the ability to manipulate pixels form an image, let's investigate what we can create if we don't just update the pixel values, but use those values to draw shapes on the screen instead.

Here's an example of using our basic tile pattern from last class, but extracting the pixel values from the image:

{% picture pixels_triangles-01edf18bcb03b06a74c43bb66a782481.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/transformation/pixels_triangles)

Here's an example where we're taking last weeks cube pattern and using the pixel values to determine the color of the cubes:

{% picture cube_pattern-c7940f356e94d356f438a0c1a1604e3a.png %}
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/transformation/cube_pattern)