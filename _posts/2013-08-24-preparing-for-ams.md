---
layout:     default
title:      Preparing Images for Printing at AMS
date:       2013-08-24 19:15:22
categories: printing-code
---

Preparing Images For Printing At AMS
====================================

Now that you know how to export PDF's from Processing, how do we prepare the image for print at AMS? It's a simple process, but it's important to do it right. These are the steps we need to take:

* Picking the paper
* Convert to TIF file with the Adobe RGB (1998) color profile


Picking the Paper
-----------------

Before you start coding, you need to figure out what kind of paper you want to print on. Both paper types can be printed on the 4 AMS self service printers. We have 2 types of paper:

### Ultrasmooth Fine Art

This is the **matte** paper. The paper is a rough, non-shiny paper, and it works really well for graphic prints.

This paper is 17" wide, and you basically determine the height, as it's a full roll of paper. Don't use too much though. Often you want the height to be less than 22", maybe even square.

### Premium Semimatte Photo Paper

This is the **photo** paper. The paper is not glossy, but looks more like photo paper.

This paper is 16" wide. Again, you determine the height.


Save as TIF
-----------

Instead of saving a PNG or JPG from Processing, you will need to save it in PDF format. In order to optimize the colors for use on the AMS computer screens, we will need to convert the PDF into a TIF file with the Adobe RGB (1998) color profile. This makes sure that when you see your TIF on the screen at AMS, the colors will look the same on your print. Don't trust your laptop screen.

Follow these instructions to prepare your file:


TIF with Adobe RGB (1998) Color Profile
---------------------------------------

In order to convert your file, you will need to have Photoshop on your computer.

First, open up the PDF file.

<img src="{{ imageproxy_url }}/tif0-98e59b87006d0ee80cb2b0feacd4e54a.png" />

Photoshop will prompt you with a "PDF Import" dialog. Here you need to make sure that the image is in 300 pixels per inch, and that the width and height matches your print size.

<img src="{{ imageproxy_url }}/tif1-c95020a1c163b2591b90fc2ec02879c1.png" />

This will open up your PDF as a bitmap. Now you need to convert the color profile. You'll find that option in the "Edit" menu.

<img src="{{ imageproxy_url }}/tif2-3643704167f014b6f13a0a0884a4e1f0.png" />

Make sure to convert into the Adobe RGB 1998 color profile. You can leave all the other settings to their defaults.

<img src="{{ imageproxy_url }}/tif3-6508934b016259aa82c7f3db5cdd4738.png" />

Now you need to save the image as a TIF image. First press "Save As".

<img src="{{ imageproxy_url }}/tif4-5a825d70c18be8d152f81acd61fef58c.png" />

Choose to save a TIF without layers.

<img src="{{ imageproxy_url }}/tif5-7c4c0c4dd104aa755598608e534b5587.png" />

Press ok when this dialog shows up.

<img src="{{ imageproxy_url }}/tif6-b7670222f8faa426a54ffd83f9b81793.png" />

That's it! You now have a TIF ready for print!