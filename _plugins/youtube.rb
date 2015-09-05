module Jekyll
  class YouTube < Liquid::Tag

    def initialize(tag_name, youtube_id, tokens)
      super
      @youtube_id = youtube_id.strip
    end

    def render(context)
      "<div class=\"responsive-video\"><iframe src=\"http://www.youtube.com/embed/#{@youtube_id}\" width=\"600\" height=\"338\" frameborder=\"0\" > </iframe></div>"
    end
  end
end

Liquid::Template.register_tag('youtube', Jekyll::YouTube)