require 'nokogiri'

module Jekyll
  module RevealFilter

    def get_notes_node(doc)
      notes = Nokogiri::XML::Node.new('aside', doc)
      notes['class'] = 'notes'
      notes
    end

    def is_image?(el)
      el.name == "p" && el.children.size == 1 && el.children[0].name == "a" && el.children[0].children.size == 1 && el.children[0].children[0].name == "img"
    end

    def is_video?(el)
      el.name == 'div' && el['class'] == 'responsive-video'
    end

    def image_to_slide(p, doc)
      el = p.children[0].children[0]
      src = el.attribute("src").to_s

      # use last (biggest) srcset if available
      srcset = el.attribute('srcset').to_s
      if !srcset.nil? && srcset != ""
        srcsets = srcset.split(' ')
        src = srcsets.size > 1 ? srcsets[srcsets.size-2] : srcsets[0]
      end

      img = Nokogiri::XML::Node.new('img', doc)
      img['class'] = "stretch"
      img['data-src'] = src
      img
    end

    def video_to_slide(div, doc)
      div.css('iframe')[0]
    end

    def revealify(input)

      newy = Nokogiri::HTML::fragment('<div class="reveal"><div class="slides"></div></div>')
      old = Nokogiri::HTML::fragment("<section>" + input + "</section>")

      slideEls = ["h1", "h2", "h3", "blockquote"]
      curNotes = nil

      old.children[0].children.each do |el|

        # is this element should go on a slide
        if slideEls.include?(el.name) || is_image?(el) || is_video?(el)

          # create the slide
          slide = Nokogiri::XML::Node.new('section', newy)

          # add el to slide
          if is_image?(el)
            slide << image_to_slide(el, newy)
          elsif is_video?(el)
            slide << video_to_slide(el, newy)
          else
            slide << el
          end

          # add notes to slide
          curNotes = get_notes_node(newy)
          slide << curNotes

          # add slide to doc
          newy.css('.slides')[0] << slide

        # add notes to current slide
        elsif el.name == "p" && curNotes
          curNotes << el
        end

      end

      newy.to_html
    end
  end
end

Liquid::Template.register_filter(Jekyll::RevealFilter)