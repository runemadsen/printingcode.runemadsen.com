Printing Code
==============

Jekyll site for printingcode.runemadsen.com.


Deployment
----------

Run this to deploy to S3:

```bach
s3cmd sync --guess-mime-type --delete-removed --cf-invalidate --acl-public _site/ s3://printingcode.runemadsen.com
```