---
layout:     default
title:      Computational Color
date:       2013-08-24 19:15:22
categories: printing-code
---

Computational Color
===================

If you expect to come out of this class knowing simple rules like "red is for love" or "green is for happiness", you'll be extremely disappointed today. 

Color is way too subjective and dynamic to allow for so simple definitions. Actually, I'd rather stay away from telling you which colors to use when. Instead we will do 2 things:

* Learn to, simply, observe color and its characteristics.
* Learn how the ideas of color combination springs from simple rules performed on the color spectrum

<iframe width="600" height="338" src="http://www.youtube.com/embed/MXQozTxQSiE" frameborder="0" > </iframe>

The woman in the red dress is a character in a training program built by the rebels in the Matrix. More specifically, [Mouse](http://en.wikipedia.org/wiki/List_of_minor_characters_in_the_Matrix_series#Mouse) designed her... and he picked the color red for her dress. Although many find it hard to work creatively with color, very few people would question why he chose this. It's attractive, erotic, wild and draws attention.

There are 2 reasons why I choose to show this scene:

1. The use of color in this movie is fantastic. A vague green color is used for all scenes in the Matrix. The slaves in the Matrix are dressed in gray. Scenes in the Nebuchadnezzar are tinted blue to symbolize clouds, heaven and light - the real world. Everything has a symbolic meaning, and color is used to emphasize it.

2. Once you learn to control color, you'll be like Neo moving through the Matrix. You'll see things that no one else sees.

Color is one the hardest things to master in the graphic arts, as it's both very subjective and highly dynamic (our perception of a single color change depending on what other colors we pair it with).

Here's a quick example of how dynamic behavior color combination can have. This looks like 2 grounds where the grounds exchanged in the center squares. They are - in fact - 3 colors, where the center square is a color midways in the hue spectrum between the grounds. The eye is searching for relevance.

<img src="{{ imageproxy_url }}/itten_exchange-54e16caa740ad97c32631a3a982f2edc.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/itten_exchange)

We can prove this by removing the grounds:

<img src="{{ imageproxy_url }}/itten_exchange2-e18896ea63b2570f24ce868640af63a3.jpg"  />
	
The conclusion to this must be that color theory matters: Based on simple calculation we created an effect in the eye of the beholder.

The problem with combining color only by numbers is that you can start to trust the numbers instead of your eyes. Here's another example of why this is problematic. In this example the small squares looks like the exact same color, but they are not even close. Because they keep a relative distance in brightness to their respective grounds, they look the same to the eye. We will investigate this further later when talking about simultaneous contrast.

<img src="{{ imageproxy_url }}/itten_example2-35a7b8430713c14c21552c76b16a9925.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/itten_example2)

Again, let's remove the background and see.

<img src="{{ imageproxy_url }}/itten_example2_removed-3647f5a05e16cedd55f8eef5b89f0407.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/itten_example2)

	
What is Color?
--------------

When you direct white light through a prism, you get a range of colors. White light holds all colors. When you mix all colors together, you get white. If you remove all colors, you get black.

<img src="{{ imageproxy_url }}/pinkfloyd-aea2c8b165d13c190b92aec21c22c615.jpg"  />
	
You know this from Processing:

<pre >
fill(255, 255, 255); // this is white
fill(0, 0, 0); // this is black
</pre>

This is why the sun turns red when setting. The atmosphere is a filter that removes colors.

<img src="{{ imageproxy_url }}/sunset-2b180922495043cafb0ec791fea25ada.jpg"  />

Color is all around us. Color express meaning. It's a natural way of communication. 

<img src="{{ imageproxy_url }}/red-22ea9839571b3d1518e226e87a1b0ac5.jpg"  />


Subtractive vs. Additive Color Systems 
--------------------------------------

Let's say that you walk down to Blick and buy a beginner's painting set and mix all of the colors together in a bucket. What color will you get? - Black.

Let's say you then open a new processing sketch and mixes all colors together. What color do you get? - White.

Obviously there are 2 different ways that colors mix: by addition and by subtraction.

This is Johannes Itten's color wheel. It's built on Goethe's color wheel, and this is the wheel that most of you are familiar with. The RYB wheel.

<img src="{{ imageproxy_url }}/circle_itten-34e42bc50440c00ddc77ad8d7c467f27.jpg"  />
	
All colors created with paint or ink will combine in a **subtractive** way, meaning that if you mix all colors together, the resulting color will be black (pigments work by absorbing light and reflecting the remaining colors).

If you use RGB as the primary colors when painting, you cannot mix yellow. This is why RYB was chosen as primary colors, and this had a tremendous impact on color use in art.

Then there's the RGB wheel:

<img src="{{ imageproxy_url }}/circle_rgb-6c00abe1aef3327613842268b97acb01.jpg"  />
	
All colors created with light will combine in an **additive** way, meaning that if you mix all colors together, the resulting color will be white. RGB is just one model that simulates this.

The truth is that color is a sliding spectrum, and color wheels are just basic ways of dividing this spectrum. Actually, you can use any three colors to define what's called [a color gamut](http://en.wikipedia.org/wiki/Gamut), a subset of all possible colors.

So when we talk about things like "complementary" or "opposite" color, this varies depending on your color wheel. The complementary color of "red" in the RYB color wheel is "green", but "cyan" in the RGB wheel.

Because we are working in both worlds, we are faced with a problem: we are designing on a screen that uses additive blending, but printing on a printer that uses subtractive blending. AMS solved this problem for us because the printers are optimized for the Adobe RGB 1998 color profile.


What's wrong with RGB?
----------------------

Most of you are probably totally comfortable using the RGB color mode in Processing. If we want do make a blue color, we do this:

<pre >
	fill(0, 0, 255); // this is blue
</pre>

And if we want to draw a green color we do this:

<pre >
	fill(0, 255, 0); // this is green
</pre>

But once you start doing generative color, you realize that RGB is not a good way of working. For example, here's a color. 

<img src="{{ imageproxy_url }}/hsb-8beb6fb67b65b877bd67089f011f071e.jpg"  />

It's really hard to move around the color spectrum in RGB.

HSB is a color model that exists as a 3D color space, where hue, saturation and brightness has an axis each.

<img src="{{ imageproxy_url }}/circle_hsb-817b1590be2b934bde89a6dbd982a7d0.jpg"  />

This makes it much easier to move around in on the color wheel, because one of those axis is hue, the actual hue of the color.

	
HSB And Colormodes in Processing
--------------------------------

By default, Processing starts in an RGB color mode, where is expects values from 0 to 255. However, by using the colorMode function, we can change that default color mode. For example, if I wanted black to be 0 and white to be 1 instead off 255, I could do this:

<pre >
	colorMode(RGB, 1, 1, 1);
</pre>

Here's a example that demonstrate how to draw the color green in 3 different color modes.

<img src="{{ imageproxy_url }}/colormode-f7a92660599f24f8ae9e9355e18c9aa1.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/colormode)

You often see people use HSB color mode like this in Processing:

<pre >
	colorMode(HSB, 360, 100, 100);
	fill(0, 100, 100); // this is red
	fill(240, 100, 100); // this is blue
</pre>

We normally set hue as a range for 0-360, because that's the number of degrees in a full circle. This is also the default in Photoshop.

The first steps into working with HSB is to just draw simple colors on the screen. Here's a sketch that shows how to draw a red, green and blue square, along with some other colors.

<img src="{{ imageproxy_url }}/simplehsb-3ad3b063b333c261b257bb92dc801cb4.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/hsb)

Now that we know how to move around the hue wheel, we can use this techniqe to draw a color circle.

<img src="{{ imageproxy_url }}/circle_hsb_processing-6a62b0df2335067188600ebb4b76f12c.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/hsb_color_circle)

By tweaking the saturation and brightness we can make the colors less sharp.

<img src="{{ imageproxy_url }}/circle_hsb_processing2-5517c32bc9fa11109cfa5acbe91c8516.jpg"  />


Toxiclibs TColor
--------------------------

In this class we'll be using the Toxiclibs library to manipulate color. Toxiclibs ships with an awesome set of classes that can drastically reduce the headaches of generating and manipulating colors in Processing. 

Before using the ToxicLibs library in Processing, you will need to change the colormode. All color numbers in Toxiclibs operate in a scale from 0 to 1 (normalized), instead of 0-255 as you're used to. This may seem weird at first, but makes it a lot easier when doing calculations.

<pre >
	colorMode(HSB, 1, 1, 1);
	fill(0, 1, 1); // this is red
	fill(0.68, 1, 1); // this is blue
</pre>

**TColor** is the most important color class in the library, because it's a replacement of the native color object in Processing. It has many advantages over the normal color mode:

<ul >
	<li>Automatically converts between colormodes</li>
	<li>Has a bunch of handy functions to change color (contrast, saturation, etc)</li>
	<li>Implements compare methods so you can eaisly say: "Give me the darkest color" in this array</li>
	<li>Soooooo much more</li>
</ul>

This sketch shows you how to create a new TColor object. You can do this in many ways, as shown in the code:

<img src="{{ imageproxy_url }}/tcolor_simple-4411db7dccf43eec4fe5045073546818.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/toxiclibs_tcolor_simple)

Here's a more complex example that shows you how to use some of the color manipulation functions, to change the color in code.

<img src="{{ imageproxy_url }}/tcolor-bfcb70d890ea51e45cee98d5fa832b0c.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/toxiclibs_tcolor)
	

Generating Monochromatic Color Schemes
--------------------------------------

The different ways of creating color schemes are basically just constraints to help you not float around randomly in the 3D color space. All these examples use TColor.

<img src="{{ imageproxy_url }}/monochrome-596560cc22b0935db7aec9107578ebd6.jpg"  />

One of the simplest possible ways of generating a color scheme is to pick a specific hue and saturation, and then choose colors that are evenly distributed on the brightness scale. This is one example of a **monochromatic color scheme**.

<img src="{{ imageproxy_url }}/color_scheme_brightness-268a26063476fac1e53470552cb60538.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/color_scheme_brightness)
	
This sketch has an even distribution in brightness values. You can easily imagine code that choose the values randomly.

A slightly more sophisticated **monochromatic color scheme** would be to manipulate both saturation and brightness:

<img src="{{ imageproxy_url }}/color_scheme_saturation_brightness-4def5d3a15dac1c34888cdc02c8daa15.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/color_scheme_saturation_brightness)

This sketch randomly chose a saturation and brightness value between 0 and 100.

Monochromatic can be used for very simple and minimalistic graphics. Often you see it used with pure black or white to create contrast.

<img src="{{ imageproxy_url }}/klm-4896394dd02177e59d7d5af317a0076c.jpg"  />

This is an example of F.H.K. Herion's design for KLM Royal Dutch Airlines with a monochrome color profile.

<img src="{{ imageproxy_url }}/signs-2d2f9e950142c6b9752a26b1bce304a5.jpg"  />

Traffic signs, here British traffic signs from the 1960's, generally have a monochromatic color profile, in order not to confuse the driver. Color is selectively used for drawing attention to important instructions.

<img src="{{ imageproxy_url }}/vitaminwater-f707011dbe764deb074e00b39e858c47.jpg"  />

We are hip. We are trendy. We use monochromatic color.

<img src="{{ imageproxy_url }}/bad_mono-746f3c1d5f85542436a302e72f3053c5.jpg"  />
	
Here's an example of extremely bad use of a monochromatic color scheme. The only role of the color in this graph is to connect names with lines. How can we do that when the colors are almost identical?


Generating Analogous Color Schemes
----------------------------------

<img src="{{ imageproxy_url }}/analogous-5905a98134b0e87c7822f38cf9af3d62.jpg"  />

And analogous color scheme is a suit of colors that are located close to each other on the color wheel. Often this is a color located 30 degrees away from the base color hue on either side, but that degree can vary.

We rotate 30 degrees around the color wheel because the standard color wheel has 12 colors, and 360/12 is 30. We are just finding the "next" color on the wheel.

<img src="{{ imageproxy_url }}/color_scheme_analogous-576412bd33c6de48a7376ab07f981280.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/color_scheme_analogous)

Of course nothing prevents you from playing with the settings. Here's an example of the same blue base color, but with neighboring colors found by rotating 50 degrees around the color wheel, and subtracting 50 from the base saturation.

The further you rotate around the wheel, the less analogous harmony you get. We can loosely say that anything below a 90 degree angle is an analogous color.

<img src="{{ imageproxy_url }}/color_scheme_analogous2-94511f8f078d8646744bfa2c8df6b6a8.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/color_scheme_analogous2)

<img src="{{ imageproxy_url }}/analogous_trees-afb6b74a8dc302e576a0bb493b15cfd7.jpg"  />

Analogous color schemes are found in nature and are often very harmonious to the eye.

<img src="{{ imageproxy_url }}/analogous_letterpress-dfbc8872aec561b9fae708180fbe5e39.jpg"  />

With the return of the letterpress greeting card in the 2000's, I've noticed an extreme use of analogous color schemes.

<img src="{{ imageproxy_url }}/weingart_analogous-7f0ab95720ec055605bc936353e9cd95.jpg"  />

Here's an example of analogous color use from Wolfgang Weingart's book about typography.


Generating Complementary Color Schemes
--------------------------------------

A complementary color is a color that exist on the opposite side of the color wheel. Older color theorists considered this to be the definition of color harmony, as complementary colors will always mix to grayish black (in paint) or grayish white (in light).

Some complementary colors are: Red = Cyan, Green = Magenta, Blue = Yellow.

<img src="{{ imageproxy_url }}/complementaries-41a71e8df01c8b7e659808b1d03289f0.jpg"  />

Look at a green square for a while, and then close your eyes. You will now see a cyan square. The eye tends to look for balance: tried to find colors that mix to white.

It's easy to find a complementary color in Processing:

<img src="{{ imageproxy_url }}/color_scheme_complementary-ae473868a70ecb6fd2f360b132ac8f2f.jpg"  />

<img src="{{ imageproxy_url }}/color_scheme_complementary3-acef8761826c4fe9d1a4a75e9c4e98b9.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/color_scheme_complementary)

Two examples of complementary color schemes. Notice the sharp contrast between the two colors.

<img src="{{ imageproxy_url }}/color_scheme_complementary2-be02ec94c602df4f8a19e26334defad2.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/color_scheme_complementary2)


Generating Triadic Color Schemes
--------------------------------

<img src="{{ imageproxy_url }}/triadic-9adb1731f0659e77584becced63e35ef.jpg"  />

A triadic color can be said to be the opposite of an analogous color. Where analogous colors are colors located within 90 degrees of the primary color hue, triadic colors are colors located more than 90 degrees away of the base color hue.

Here's a "pure" triadic color scheme with colors found by rotating 120 degrees on each side (internally an Equilateral triangle with 60 degree internal angles).

<img src="{{ imageproxy_url }}/color_scheme_triadic-06b0deb93c965cd657d77b2347597801.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/color_scheme_triadic)

You may notice how this is the primary colors, which makes sense given the calculation.

An interesting thing is to compare a triadic color scheme in RGB with the corresponding scheme in a subtractive color mode like RYB.

<img src="{{ imageproxy_url }}/color_scheme_triadic_sub-d0d655b1d625d384959cc55514ffbf0f.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/color_scheme_triadic)

You may notice how the blue/yellow has a triadic relationship in RGB, but are complementary colors in RYB.

<img src="{{ imageproxy_url }}/color_scheme_triadic2-f0e08c66c8650ad0214ef4c05a97c487.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/color_scheme_triadic2)

Here's another example of a triadic color scheme with hue 90 as the base hue.


Generating Tetradic Color Schemes
--------------------------------

<img src="{{ imageproxy_url }}/tetradic-768b73622eb3aec919d28e8edcad2f51.jpg"  />

A tetradic color scheme is a set of 4 colors chosen by placing a rectangle on the color wheel and selecting the colors that fall on the corner of the rectangle.

This color scheme is basically the same as a double complementary color scheme. Here's an example of color chosen by rotating 90 degrees around the color wheel 3 times.

<img src="{{ imageproxy_url }}/color_scheme_tetrad-e987bfaeedb371cd89ea9da95b33506e.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/color_scheme_tetrad)

Notice the cold/warm contrast in this color scheme. 

However, the rectangle does not need to be equal-sided. Here's an example of a color scheme with the same base complementary pair, but with a smaller rectangle width used to pick the other complementary pair.

This increases the cold/warm contrast.

<img src="{{ imageproxy_url }}/color_scheme_tetrad2-ffc0fffa4ed649e5c924602f6e1f5495.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/color_scheme_tetrad2)

Those are the basic color scheme variations you can play with. This brings us to Itten's color contrasts.

Itten's Color Contrasts
-----------------------

<img src="{{ imageproxy_url }}/itten-9458c87a73290b4886f3280259737726.jpg"  />

Johannes Itten Proposed 7 different contrasts that you should be looking for when using color. The idea is to be skilled in the color scale, like you can be skilled in the tonal scale:

<blockquote >
If one is not able to distinguish the difference between a higher tone and a lower tone, one probably should not make music - Josef Albers
</blockquote>

Let's go through a few of them.


Contrast of Light and Dark
--------------------------

The contrast of light and dark is very simple to understand: whenever we have two colors with a difference in brightness, a clear contrast between the two colors will exist.

The HSB color mode makes it very obvious what kind of brightness we are working with.

However computational light/dark scales are not linear. One might think that you can make a scale of equally contrasted rectangles by moving from brightness 10 to brightness 90 in steps of 10.

<img src="{{ imageproxy_url }}/contrast_lightdark_wrong-4cc40a9971add616ffe55b855e832437.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/contrast_lightdark_wrong)

You might notice how there's a sharp contrast between first dark rectangles, but almost no contrast between any rectangle with 60 or more in brightness.

First discovered in the so-called Weber-Fechner Law, a linear increase in brightness will distribute the contrast visually exponentially from white to black. An exponential increase in brightness will distribute the contrast linearly across all segments.

<img src="{{ imageproxy_url }}/albers_brightness-19d82b2addbb1b8013a4af0b3545f6bc.jpg"  />

We can of course grow our brightness exponentially in the code instead:

<img src="{{ imageproxy_url }}/contrast_lightdark_right-5f50cf2334653914bd5af006da8fe307.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/contrast_lightdark_right)

Here's an example of using an exponential increment in brightness. Notice how the contrast is much more even. Unfortunately this formula won't work in low- or high-brightness colors, but it's a good general rule.

<img src="{{ imageproxy_url }}/dada-676926d7c279917e63b8f985417280a3.jpg"  />

Front cover designed by Paul Rand. Notice the light-dark contrast and use of monochromatic color scheme.

<img src="{{ imageproxy_url }}/rand_sartre-8a1943f7737ea27e92d8d6db2bbe48df.jpg"  />

Another example of light-dark contrast by Paul Rand.

Contrast of Saturation
----------------------

The contrast of saturation describes the contrast that a brilliant color has towards a dull color of the same hue.

<img src="{{ imageproxy_url }}/contrast_saturation-77f2bcd07077e00a3f543e5692b3ffbe.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/contrast_saturation)

This is an example of 2 colors with contrast in saturation.

<img src="{{ imageproxy_url }}/klee_fish-fa03af0bacd1c880c99a186521170db6.jpg"  />

Here's an example of saturation contrast in the painting "Fish Magic" by Paul Klee.

Although there is also a light/dark contrast, it's specifically the brilliance of the fish contrasted to the dull background that makes it come alive.

<img src="{{ imageproxy_url }}/brockmann_saturation-f3ae5dc4295ed1ac8430bd5cc5397ba2.jpg"  />

Josef Muller-Brockmann uses saturated color boxes in contrast with the gray background.

Contrast of Hue
---------------

The contrast of hue describes the contrast between different color hues. The bigger the distance in hue, the bigger the contrast.

A pure triadic color scheme is the extreme instance of hue contrast.

Contrast of hue is extremely expressive, especially in brilliant colors.

<img src="{{ imageproxy_url }}/itten_hue-a31b75567b93abd7c51c2a50ffc804ef.jpg"  />

Here's an example of a strong contrast of hue, using full saturated colors and black+white.

<img src="{{ imageproxy_url }}/itten_hue2-578856fd73bc654cc813113ff9229806.jpg"  />

Removing black+white and adding colors closer to each other diminishes the hue contrast.

<img src="{{ imageproxy_url }}/book_hue-3af097f4600344be91c7db632070446c.jpg"  />

As "pure" colors were the first ink-based colors, uses of contrast of hue can be traced back to the early books of the middle ages:

<img src="{{ imageproxy_url }}/mondrian-83782d26465731be88ba64c5d8cbe719.jpg"  />

Mondrian uses color hues, but with less saturation.


Cold / Warm Contrast
--------------------

It's important to realize the dynamic nature of the cold/warm contrast. People tend to think that "red" is warm and "blue" is cold. As proved by Albers, here's an example of how extremely fragile that balance is.

<img src="{{ imageproxy_url }}/albers_example-7eb5047cfa567a37e3c9271183cd2fd8.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/albers_example)


Contrast of Extension
---------------------

> "He who first draws lines and then add color will never succeed in producing a clear, intense color effect ... Color have dimensions and directionality of their own" - Johannes Itten

Itten's contrast of extension relates to the fact that different colors do not have the same perceived volume. If a yellow rectangle and a purple rectangle are set side by side, the yellow rectangle appears much bigger.

<img src="{{ imageproxy_url }}/contrast_extension_white-1268901a682272d70804fcd71faaa176.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/contrast_extension_white)

This "contrast of extension" varies depending on the background color, neighbor colors, and arrangement.

<img src="{{ imageproxy_url }}/contrast_extension_black-48a62741b5b70af271e7579850a8af88.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/contrast_extension_black)

Goethe and later Itten proposed the following extension values for colors:

* Yellow: 9
* Orange: 8
* Red: 6
* Violet: 3
* Blue: 4
* Green: 6

Here's those numbers visualized. Notice how balanced this color wheel is compared to Itten's normal color wheel with constant color sizes.

<img src="{{ imageproxy_url }}/contrast_extension_itten-42278a09111b3845328516942c462f22.jpg"  />

And a simple processing sketch that calculates ratio between 2 color pairs using those extension values.

<img src="{{ imageproxy_url }}/contrast_extension_ratios-9e45a07d967df139181537d227c088de.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/contrast_extension_ratios)

Of course this is a very basic treatment on the fact that colors have different volumes. It could be nice to have a constant to apply in code, but it varies greatly with the background and matching colors. In the end it's a test for your visual perception.


Toxiclibs Advanced
-------------------

**ColorList** is another great class. It's basically an array that can hold multiple *TColor* objects, and perform operations on them.

<img src="{{ imageproxy_url }}/colorlist-51dbe11a5fa320c4495221b69df1d860.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/toxiclibs_colorlist)

**ColorRange** is a class you can use to make random colors, from a subset of the color wheel. You pick the general bounds, and whenever you call getColor() on the object, it will give you back a random color without those bounds. Here's a sketch that shows you how to use it.

<img src="{{ imageproxy_url }}/colorrange-6b1cda61036b4d547631415e8cd97039.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/toxiclibs_colorrange)

Besides those basic classes, there's a number of more advances classes you can use. **ColorTheme** is one of them. A ColorTheme is basically an array of _ColorRange_ objects, that when you run the _getColors()_ function on it, will run through all the _ColorRange_ objects, get a random color, and return an array of random TColors. It's a great way of creating a custom color theme from a bunch of color ranges.

<img src="{{ imageproxy_url }}/colortheme-e5913a7bc09ba687ed22f27bdffe59bf.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/toxiclibs_colortheme)

Probably the most sophisticated of the color classes is the **ColorTheory** class. Remember all those different color theories we went through in the beginning of the class? The _ColorTheory_ class allows you to create them easily in code. Here's a simple example that demonstrates how to create a bunch of colors from a _ColorTheory_.

<img src="{{ imageproxy_url }}/colortheory_simple-d6a7682e5430f8480277d3a13da44435.png"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/toxiclibs_colortheory_simple)

Here's a more advanced example showing all of the color theories in action.

<img src="{{ imageproxy_url }}/colorthemes-0975ecaaf7db82ad764cb2ca5d484c4d.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/toxiclibs_colortheory)

Toxiclibs also has a class for generating gradients.

<img src="{{ imageproxy_url }}/gradient-93429ba447d0e55f2e0948870cc4e9b4.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/toxiclibs_gradient)


How to Find Opposite Brightness
-------------------------------

For generative drawings we often want to [calculate the perceived brightness](http://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx) of a color to be able to choose a font or shape color to draw on top of it. This is especially useful when working with random colors.

We do this by using a weighted formula that calculates the perceived brightness of a color. We use that brightness approximation to choose the brightness of the overlay color.

<img src="{{ imageproxy_url }}/brightness_perceived-890cd4e3657d36e0328d5cae97df81b4.jpg"  />

<img src="{{ imageproxy_url }}/brightness_perceived2-4f06f1827f983f94b1af8a6050d07f78.jpg"  />
[Example on Github](https://github.com/runemadsen/printing-code/tree/master/color/opposite_brightness)