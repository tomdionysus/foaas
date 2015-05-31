sanitizer = require 'sanitizer'

module.exports =
  name: 'HTML'
  mime: 'text/html'

  render: (req, res) ->
    message = sanitizer.escape(req.message)
    subtitle = sanitizer.escape(req.subtitle)
    res.set 'Content-Type', 'text/html'
    res.send '<html>
  <head>
    <title>FOAAS - '+message+' - '+subtitle+'</title>
    <meta charset="utf-8">
    <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet">
  </head>

  <body style="margin-top:40px;">
    <div class="container">
      <div id="view-10" view=""><div class="hero-unit">
        <h1>'+message+'</h1>
        <p><em>'+subtitle+'</em></p>
        </div>
      </div>
    </div>
    <script>!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-42551488-1","herokuapp.com"),ga("send","pageview");</script>
  </body>
</html>'