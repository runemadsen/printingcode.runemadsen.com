require 'nokogiri'

module Jekyll
  module RevealFilter
    def revealify(input)
      newy = Nokogiri::HTML::fragment('<div class="reveal"><div class="slides"></div></div>')
      old = Nokogiri::HTML::fragment("<section>" + input + "</section>")
      old.css('h2, h3, img, iframe').each do |el|

        slide = Nokogiri::XML::Node.new('section', newy)

        if el.name == "img"

          src = el.attribute("src").to_s

          # use last (biggest) srcset if available
          srcset = el.attribute('srcset').to_s
          if !srcset.nil? && srcset != ""
            srcsets = srcset.split(' ')
            src = srcsets.size > 1 ? srcsets[srcsets.size-2] : srcsets[0]
          end

          img = Nokogiri::XML::Node.new('img', newy)
          img['class'] = "stretch"
          img['data-src'] = src
          slide << img
        else
          slide << el
        end

        newy.css('.slides')[0] << slide

      end
      newy.to_html
    end
  end
end

Liquid::Template.register_filter(Jekyll::RevealFilter)