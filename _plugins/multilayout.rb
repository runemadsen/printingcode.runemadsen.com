require 'cgi'

module Jekyll

  class MultiLayoutGenerator < Generator
    safe true

    def generate(site)
      site.posts.map! { |post|
        post.data["layout"].is_a?(Array) ? generate_layouts(post) : post
      }.flatten!
    end

    private

    def generate_layouts(post)
      post.data["layout"].map do |layout|
        view = Jekyll::Post.new(post.site, post.site.source, post.instance_variable_get(:@dir), post.name)
        view.data["layout"] = layout
        view.data["permalink"] = view_permalink(post, layout)
        view
      end
    end

    def view_permalink(post, layout)
      layout_path = CGI.escape(layout)
      if layout_path.match(/default/)
        post.url
      else
        "#{post.url}/#{layout_path}/"
      end
    end
  end
end