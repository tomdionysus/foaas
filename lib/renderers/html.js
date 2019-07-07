// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const sanitizer = require('sanitizer');

module.exports = {
  name: 'HTML',
  mime: 'text/html',

  render(req, res) {
    const message = sanitizer.escape(req.message);
    const subtitle = sanitizer.escape(req.subtitle);
    res.set('Content-Type', 'text/html');
    return res.send(`<!DOCTYPE html> \
<html> \
<head> \
<title>FOAAS - `+message+' '+subtitle+`</title> \
<meta charset="utf-8"> \
<meta property="og:title" content="`+message+' '+subtitle+`"> \
<meta property="og:description" content="`+message+' '+subtitle+`"> \
<meta name="twitter:card" content="summary" /> \
<meta name="twitter:site" content="@foaas" /> \
<meta name="twitter:title" content="FOAAS: Fuck Off As A Service" /> \
<meta name="twitter:description" content="`+message+' '+subtitle+`" /> \
<meta name="viewport" content="width=device-width, initial-scale=1"> \
<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet"> \
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-143325008-1"></script> \
<script> \
  window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-143325008-1'); \
</script> \
</head> \
\
<body style="margin-top:40px;"> \
<div class="container"> \
<div id="view-10"> \
<div class="hero-unit"> \
<h1>`+message+`</h1> \
<p><em>`+subtitle+`</em></p> \
</div> \
</div> \
\
<p style="text-align: center"><a href="http://foaas.com">foaas.com</a></p> \
</div> \
</body> \
</html>`
    );
  }
};
