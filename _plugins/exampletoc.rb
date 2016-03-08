module Jekyll

  class ExampleTocPage < Page
    def initialize(site, base, dir)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'exampletoc.html')

      self.data['title'] = "Code examples"

      # find all example pages
      examples = site.pages.find_all { |page|
        page.dir.match(/^\/examples/) && File.extname(page.name) == ".js"
      }

      # map into hashes with info we need in toc layout
      examples.map! { |page|
        {
          "category" => page.dir.split("/")[2],
          "title" => page.data['title'],
          "description" => page.data['description'],
          "url" => page.url
        }
      }

      # sort examples according to order
      order = ["form", "color", "grid", "typography", "logo", "randomization", "repetition", "transformation", "motion", "3d", "other"]
      examples.sort! { |x,y| order.index(x["category"]) <=> order.index(y["category"]) }

      # loop through and create array of arrays for categories
      cats = []
      examples.each { |example|
        if !cats.last || cats.last["category"] != example["category"]
          cats << {
            "category" => example["category"],
            "name" => example["category"].capitalize,
            "examples" => []
          }
        end
        cats.last["examples"] << example
      }

      self.data['toc'] = cats
    end
  end


  class ExampleToc < Jekyll::Generator
    def generate(site)
      site.pages << ExampleTocPage.new(site, site.source, "examples")
    end
  end
end
