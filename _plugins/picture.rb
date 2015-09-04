module Jekyll
  class Picture < Liquid::Tag

    def initialize(tag_name, img, tokens)
      super
      @url = "http://images.runemadsen.com"
      @img = img.strip
    end

    def render(context)

      small = "#{@url}/600x/#{@img}"
      large = "#{@url}/1440x/#{@img}"

      # Render a responsive image tag that basically only renders 600px.
      # But, add a bigger size I can use for slideshows.
      "<img src=\"#{small}\" srcset=\"#{small} 600w, #{large} 1440w\" sizes=\"600px\" />"
    end
  end
end

Liquid::Template.register_tag('picture', Jekyll::Picture)