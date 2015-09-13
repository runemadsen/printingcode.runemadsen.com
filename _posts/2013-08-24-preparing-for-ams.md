---
layout:     [default, slides]
title:      Preparing Images for Printing at AMS
date:       2013-08-24 19:15:22
categories: printing-code
---

Preparing Images For Printing At AMS
====================================

Unfortunately, the process of converting images from SVG to TIFF takes a few more steps than it really should. However, it'll be a breeze once you've done it a few times.

{% picture export_1-cadb453cd95f4c5c0abb66fd340fcc81.png %}

First, install [SVG Crowbar](http://nytimes.github.io/svg-crowbar/), a Chrome bookmark that downloads an SVG from a webpage to your computer. When you've added this to your bookmarks, click the bookmark when viewing your sketch, and it'll download the SVG file to your computer.

{% picture export_2-e9e12dc457cafbe763e056efdfd2552a.png %}

Now open your image with Illustrator. If you do not have Illustrator installed, you can use one of ITP's computers or use a computer in the AMS studio.

It's helpful to open the Illustrator *Preferences* and under *Units* set *General* to inches. This will show inches as the main measurement, which is great for print.

{% picture export_3-1bf158896078ebbb77ce275816c23957.png %}

Now you need to resize the SVG so the dimensions match the printed paper. I'm trying to print this ugly circle, and I know that the paper is 17 inches wide. So I'm going to resize it to be 16 inches wide to allow some room around the edges.

So I first click *Document Setup*.

Then in the new window, I click *Edit Artboards*

{% picture export_4-c4b944e4c4f65d76f3cf16d301b2b909.png %}

In the top-right corner of Illustrator, I can now set new dimensions for the artboard. First I click the small icon named *Constrain Width and Height Proportions* to now stretch the image. Then I set the width to *16 inches*.

{% picture export_5-22aa2b0e895f3e4913961b25920ef238.png %}

You will now see that the artboard is much bigger than the content. So with the black arrow selected, highlight all content on the page, and resize the content to fit the window. Remember to hold down *Shift* to not stretch the content.

During this process you can also trim away unneeded content or perform any other manipulations that you want.

{% picture export_6-dada56847e02667c32b683b04b655da3.png %}

Now click *Export*.

{% picture export_7-ef6e820c29d485a193fda55da050fb80.png %}

In the new window, choose *TIFF* as the output format, and click *Use Artboards* to constrain the exported image to your resized artboard.

{% picture export_8-e7e61958b17830b5c42d9c0c6760b45d.png %}

Now you need to open the exported TIFF in Photoshop to convert it to a different color profile. This is helpful to do while printing at AMS, as their screens are calibrated to their printer settings.

{% picture export_9-90468045d1e33c6b9ffba17abd84347f.png %}

Chose *Edit* and *Convert to Profile*.

{% picture export_10-d9d1a0a29b836e23a611402ff03676ab.png %}

Choose the *Adobe RGB 1998* profile and click *OK*.

If the colors don't look perfect, you can use *Hue/Saturation* or *Curves* to tweak the colors before printing.

{% picture export_11-0abe39dbb5fbbfc29427c917cca5de1c.png %}

When things look good, press *Save* and follow the AMS instructions for printing from their software.
