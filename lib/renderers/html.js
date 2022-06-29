const sanitizer = require('sanitizer')

module.exports = {
  name: 'HTML',
  mime: 'text/html',

  render (req, res) {
    const message = sanitizer.escape(req.message)
    const subtitle = sanitizer.escape(req.subtitle)
    res.set('Content-Type', 'text/html')
    return res.send('<!DOCTYPE html> <html> <head> <title>PFOAAS - ' + message + ' ' + subtitle + '</title> <meta charset="utf-8"> <meta property="og:title" content="' + message + ' ' + subtitle + '"> <meta property="og:description" content="' + message + ' ' + subtitle + '"> <meta name="twitter:card" content="summary" /> <meta name="twitter:site" content="@bahree" /> <meta name="twitter:title" content="PFOAAS: Polite Fork Off As A Service" /> <meta name="twitter:description" content="' + message + ' ' + subtitle + '" /> <meta name="viewport" content="width=device-width, initial-scale=1"> <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet"> <script async src="https://www.googletagmanager.com/gtag/js?id=G-JDNF1TKG8B"></script> <script>   window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag(\'js\', new Date()); gtag(\'config\', \'G-JDNF1TKG8B\'); </script> </head> <body style="margin-top:40px;"> <div class="container"> <div id="view-10"> <div class="hero-unit"> <h1>' + message + '</h1> <p><em>' + subtitle + '</em></p> </div> </div> <p style="text-align: center"><a href="http://pfoaas.desigeek.com">home</a></p> <p style="text-align: center"><small>(c) 2022</small></p> </div> </body> </html>'
    )
  }
}
