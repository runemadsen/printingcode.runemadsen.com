require 'digest'
require 'mime-types'
require 'aws-sdk'

# Variables
# -------------------------------------------------

ENV["AWS_ACCESS_KEY_ID"] = "AKIAJRPZSNETSNQBX5QA"
ENV["AWS_SECRET_ACCESS_KEY"] = "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"
ENV["AWS_REGION"] = "us-east-1"

s3 = Aws::S3::Resource.new
S3_BUCKET = s3.bucket("assets.runemadsen.com")


# Helpers
# -------------------------------------------------

def tosmall(local)
  return File.dirname(local) + "/" + File.basename(local, ".*") + "_small" + File.extname(local)
end

def fingerprint(local)
  digest = Digest::MD5.hexdigest(open(local).read)
  base_name = File.basename(local, ".*").gsub(" ", "-").downcase
  return base_name + "-#{digest}" + File.extname(local)
end

def upload_s3(local, remote)
  object = S3_BUCKET.object(remote)
  object.put(
    body: open(local).read,
    cache_control: "max-age=31104000",
    content_type: MIME::Types.type_for(local).first.content_type
  )
end


# Fingerprint
# -------------------------------------------------

files = Dir["_posts/*.md"]
images = Dir["_assets/images/**/*.*"].map { |image|
  {
    local: image,
    asset_path: image.gsub("_assets/images/", ""),
    small_asset_path: tosmall(image).gsub("_assets/images/", ""),
    rev_filename: fingerprint(image)
  }
}.reject { |hash| !!hash[:local].match("_small") }


# Upload to S3
# -------------------------------------------------

images.each { |hash|
  puts "Uploading #{hash[:local]} to #{hash[:rev_filename]}"
  upload_s3(hash[:local], hash[:rev_filename])
}

# Replace content
# -------------------------------------------------

imageproxy = "http://assets.runemadsen.com"

files.each do |file|

  puts "Rewriting #{file}"

  content = File.open(file).read

  # make small images big
  content.gsub!("_small", "")

  images.each do |image|

    # big images
    content.gsub!("{% asset_path #{image[:asset_path]} %}", "{{ imageproxy_url }}/#{image[:rev_filename]}")

    # small images with opposite ending
    opposite = image[:asset_path].match(".jpg") ? ".png" : ".jpg"
    content.gsub!("{% asset_path #{image[:asset_path].gsub(File.extname(image[:asset_path]), opposite)} %}", "{{ imageproxy_url }}/#{image[:rev_filename]}")

    # remove data-slideshow
    content.gsub!(/data-slideshow=".*"/, "")

  end

  File.open(file, 'w') { |file| file.write(content) }

end