---
layout:     [default, slides]
title:      Preparing Images for Printing at AMS
date:       2013-08-24 19:15:22
categories: printing-code
---

Preparing Images For Print
==========================

In order to print your image, you need to convert it from vector graphics (SVG) to bitmap (TIFF).

## Download your SVG

First, install [SVG Crowbar](http://nytimes.github.io/svg-crowbar/), a Chrome bookmark that downloads your Rune.js SVG from the browser to your computer. When you've added this to your bookmarks, click the bookmark when viewing your sketch, and it'll download the SVG file to your computer.

{% picture export_1-cadb453cd95f4c5c0abb66fd340fcc81.png %}

## Convert SVG to PNG

Now convert your SVG to a PNG sized according to your print dimensions. For this example, we'll assume that you want to print a 16 inch wide image (this will leave a little border on the 17 inch roll). The image needs to print at 300 dpi, which means that your PNG needs to be 4800 pixels wide (16 * 300 = 4800).

Now, go to [my online SVG converter](http://runemadsen.com/svg-converter/), drag your SVG on top of the converter, and set the width of the image to 4800 pixels. Click "convert", and you will now have a PNG image.

## Tweak in Photoshop

Now open your new PNG in Photoshop. You will need to both change the DPI resolution and change the color profile.

To change your PNG resolution, Choose *Image Size* from the *Image* menu. Under *Document Size*, change *Width* to 16 inches. Then change *Resolution* to 300 Pixels/Inch.

{% picture image_size-18273d54a2e4999c510ac993ba7d93fd.png %}

Now you need to change the color profile of the image to Adobe 1998. This is the color profile that the AMS printers and screens are calibrated for, and if you don't do this, your colors will be off.

Chose *Edit* and *Convert to Profile*.

{% picture export_9-90468045d1e33c6b9ffba17abd84347f.png %}

Choose the *Adobe RGB 1998* profile and click *OK*.

{% picture export_10-d9d1a0a29b836e23a611402ff03676ab.png %}

If the colors don't look perfect, you can use *Hue/Saturation* or *Curves* to tweak the colors before printing.

{% picture export_11-0abe39dbb5fbbfc29427c917cca5de1c.png %}

When things look good, choose *Save As* and save the image as a TIFF.

Now your image is ready to print at AMS!
