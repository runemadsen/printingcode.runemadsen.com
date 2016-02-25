require 'cgi'

module Jekyll

  module PermalinkBuilder
    extend self

    def get_adjusted_permalink(resource, layout)

      layout_path = CGI.escape(layout)
      url = resource.url

      if layout_path.match(/default/)
        return url
      else
        return "#{url}#{layout_path}/"
      end

    end
  end

  class PageLayoutsGenerator
    def generate(site)
      pages = site.pages.map! do |page|
        if page.data["layout"].is_a?(Array)
          create_layout_views(page)
        else
          page
        end
      end

      pages.flatten!
    end

    private

    def create_layout_views(page)
      page.data["layout"].map do |layout|
        dir = File.dirname(page.relative_path)
        new_page = Page.new(page.site, page.site.source, dir, page.name)

        new_page.data["layout"] = layout
        new_page.data["permalink"] = PermalinkBuilder.get_adjusted_permalink(page, layout)

        new_page
      end
    end
  end

  class CollectionLayoutsGenerator
    def generate(site)
      site.collections.each do |_, collection|
        docs = collection.docs.map! do |doc|
          if doc.data["layout"].is_a?(Array)
            create_layout_views(site, collection, doc)
          else
            doc
          end
        end
        docs.flatten!
      end
    end

    private

    def create_layout_views(site, collection, doc)
      doc.data["layout"].map do |layout|
        new_doc = Document.new(doc.path, {
          :site => site,
          :collection => collection
        })
        new_doc.read
        new_doc.data["layout"] = layout
        new_doc.data["permalink"] = PermalinkBuilder.get_adjusted_permalink(doc, layout)
        new_doc
      end
    end
  end

  class MultiPostGenerator < Generator
    safe true

    def generate(site)
      PageLayoutsGenerator.new.generate(site)
      CollectionLayoutsGenerator.new.generate(site)
    end
  end
end
