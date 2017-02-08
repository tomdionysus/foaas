sanitizer = require 'sanitizer'

module.exports =
  name: 'HTML'
  mime: 'text/html'

  render: (req, res) ->
    message = sanitizer.escape(req.message)
    subtitle = sanitizer.escape(req.subtitle)
    res.set 'Content-Type', 'text/html'
    res.send '<!DOCTYPE html>
<html>
  <head>
    <title>ITSP - '+message+' - '+subtitle+'</title>
    <meta charset="utf-8">
    <meta property="og:description" content="'+message+' '+subtitle+'">
    <meta name="twitter:card" content="summary" />
    <!-- meta name="twitter:site" content="@foaas" / -->
    <!-- meta name="twitter:title" content="FOAAS: Fuck Off As A Service" / -->
    <!-- meta name="twitter:description" content="'+message+' '+subtitle+'" / -->
    <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet">
  </head>

  <body style="margin-top:40px;">
    <div class="container">
      <div id="view-10">
        <div class="hero-unit">
          <h1>'+message+'</h1>
          <p><em>'+subtitle+'</em></p>
        </div>
      </div>
    </div>
    <script>(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)   })(window,document,"script","https://www.google-analytics.com/analytics.js","ga");    ga("create", "UA-15718525-6", "auto");   ga("send", "pageview");</script>
  </body>
</html>'
