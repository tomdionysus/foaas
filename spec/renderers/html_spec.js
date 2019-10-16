/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const renderer = require(__dirname+'/../../lib/renderers/html');

describe("HTML Renderer", function() {
  it("should have the correct name", () => expect(renderer.name).toEqual('HTML'));

  it("should have the correct mime type", () => expect(renderer.mime).toEqual('text/html'));

  return describe('render', function() {

    it('should call res.set with Content-Type header', function() {
      const req = {
        message: 'ONE',
        subtitle: 'TWO'
      };
      const res = {
        set: jasmine.createSpy(),
        send: jasmine.createSpy()
      };
      renderer.render(req,res);

      return expect(res.set).toHaveBeenCalledWith('Content-Type', 'text/html');
    });

    it('should call res.send with correct params', function() {
      const req = {
        message: 'ONE',
        subtitle: 'TWO'
      };
      const res = {
        set: jasmine.createSpy(),
        send: jasmine.createSpy()
      };
      renderer.render(req,res);

      return expect(res.send).toHaveBeenCalledWith(`<!DOCTYPE html> \
<html> \
<head> \
<title>ITSPAAS - ONE - TWO</title> \
<meta charset="utf-8"> \
<meta property="og:description" content="ONE TWO"> \
<meta name="twitter:card" content="summary" /> \
<meta name="twitter:site" content="" /> \
<meta name="twitter:title" content="ITSPAAS: Is Trump Still President (As A Service)" /> \
<meta name="twitter:description" content="ONE TWO" /> \
<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet"> \
</head> \
<body style="margin-top:40px;"> \
<div class="container"> \
<div id="view-10"> \
<div class="hero-unit"> \
<h1>ONE</h1> \
<p><em>TWO</em></p> \
</div> \
</div> \
</div> \
<script>!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-15718525-6","auto"),ga("send","pageview");</script> \
</body> \
</html>`);
    });
   
    return it('should sanitize params', function() {
      const req = {
        message: '<one>ONE</one>',
        subtitle: '<two>TWO</two>'
      };
      const res = {
        set: jasmine.createSpy(),
        send: jasmine.createSpy()
      };
      renderer.render(req,res);

      return expect(res.send).toHaveBeenCalledWith(`<!DOCTYPE html> \
<html> \
<head> \
<title>ITSPAAS - &lt;one&gt;ONE&lt;/one&gt; - &lt;two&gt;TWO&lt;/two&gt;</title> \
<meta charset="utf-8"> \
<meta property="og:description" content="&lt;one&gt;ONE&lt;/one&gt; &lt;two&gt;TWO&lt;/two&gt;"> \
<meta name="twitter:card" content="summary" /> \
<meta name="twitter:site" content="" /> \
<meta name="twitter:title" content="ITSPAAS: Is Trump Still President (As A Service)" /> \
<meta name="twitter:description" content="&lt;one&gt;ONE&lt;/one&gt; &lt;two&gt;TWO&lt;/two&gt;" /> \
<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet"> \
</head> \
<body style="margin-top:40px;"> \
<div class="container"> \
<div id="view-10"> \
<div class="hero-unit"> \
<h1>&lt;one&gt;ONE&lt;/one&gt;</h1> \
<p><em>&lt;two&gt;TWO&lt;/two&gt;</em></p> \
</div> \
</div> \
</div> \
<script>!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-15718525-6","auto"),ga("send","pageview");</script> \
</body> \
</html>`);
    });
  });
});
