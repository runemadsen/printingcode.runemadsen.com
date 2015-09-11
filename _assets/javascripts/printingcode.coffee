class PrintingCode extends Backbone.View

  initialize: ->
    @init_toc()

  # TOC
  # ---------------------------------------------------------------------------------

  init_toc: ->

    @$("#toc").append("<ul></ul>")

    _.each(@$("h2"), (heading) =>
      jheading = $(heading)
      slug = jheading.attr("id")
      txt = jheading.text()
      @$("#toc ul").append("<li><a href='#"+slug+"'>"+txt+"</a></li>")
    )

    @$("#toc ul").append("<li><a href='slides'>Go to slideshow</a></li>")

$ ->
  window.app = new PrintingCode(el:"body")