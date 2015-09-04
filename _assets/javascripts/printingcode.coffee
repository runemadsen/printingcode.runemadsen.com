class PrintingCode extends Backbone.View

  initialize: ->
    @init_lines()
    @init_toc()
    @init_slideshow_link()
    @init_responsive_images()

  # Lines
  # ---------------------------------------------------------------------------------  

  init_lines: ->
    new Processing($("#lines")[0], window.linesCode)

  # TOC
  # ---------------------------------------------------------------------------------

  init_toc: ->
    
    @$("#left").append("<ul id='toc'></ul>")

    _.each(@$("h2"), (heading) =>
      jheading = $(heading)
      slug = jheading.attr("id")
      txt = jheading.text()
      @$("#toc").append("<li><a href='#"+slug+"'>"+txt+"</a></li>")
    )

  # Images
  # ---------------------------------------------------------------------------------

  init_responsive_images: ->
    _.each(@$("img"), (img) =>
      $(img).addClass("img-responsive")
    )

  # Slideshow
  # ---------------------------------------------------------------------------------

  init_slideshow_link: ->
    @$("#left").append("<a href='#' class='launch-slideshow'>Launch Slideshow</a>")
    @$(".launch-slideshow").click( (e) =>
      e.preventDefault()
      @start_slideshow()
    )

  start_slideshow: ->

    # save all content and clear body and normal js and css
    slideshow_content = @$("#right *[data-slideshow], #right h2, #right h3")
    $('head script, head link').remove()
    
    # add deckjs stuff
    @$el.html('<div class="deck-container"></div>')
    $('head').append('<script src="'+window.deckjs.javascript+'"></script>')
    $('head').append('<link href="'+window.deckjs.stylesheet+'" rel="stylesheet" type="text/css">')

    slides = _.map(slideshow_content, (el) =>
      slide = $('<div class="slide"><div>')
      if el.nodeName is "IMG"
        slide.append('<img src="'+$(el).attr("data-slideshow")+'" />')
      else
        slide.append(el)
      slide
    )

    $(".deck-container").append(slides)
    $.deck('.slide')

    # needed because initial scale is terrible
    $(window).trigger('resize')

$ ->
  window.app = new PrintingCode(el:"body")