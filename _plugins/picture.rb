module Jekyll
  class Picture < Liquid::Tag

    def initialize(tag_name, img, tokens)
      super
      @url = "http://images.runemadsen.com"
      @img = img.strip
    end

    def render(context)

      small = "#{@url}/750x/#{@img}"
      large = "#{@url}/1440x/#{@img}"

      # Render a responsive image tag that basically only renders 600px.
      # But, add a bigger size I can use for slideshows.
      "<a href=\"#{large}\"><img src=\"#{small}\" srcset=\"#{small} 750w, #{large} 1440w\" sizes=\"600px\" /></a>"
    end
  end
end

Liquid::Template.register_tag('picture', Jekyll::Picture)