module Jekyll
  class ExampleConverter < Converter
    safe true
    priority :low

    def matches(ext)
      ext =~ /^\.js$/i
    end

    def output_ext(ext)
      ".html"
    end

    def convert(content)
      content
    end
  end
end