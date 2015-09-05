module Jekyll
  class Vimeo < Liquid::Tag

    def initialize(tag_name, vimeo_id, tokens)
      super
      @vimeo_id = vimeo_id.strip
    end

    def render(context)
      "<div class=\"responsive-video\"><iframe src=\"http://player.vimeo.com/video/#{@vimeo_id}?title=0&amp;byline=0&amp;portrait=0\" width=\"600\" height=\"338\" frameborder=\"0\" > </iframe></div>"
    end
  end
end

Liquid::Template.register_tag('vimeo', Jekyll::Vimeo)