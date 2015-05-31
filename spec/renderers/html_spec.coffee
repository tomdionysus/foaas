renderer = require __dirname+'/../../lib/renderers/html'

describe "HTML Renderer", ->
  it "should have the correct name", ->
    expect(renderer.name).toEqual('HTML')

  it "should have the correct mime type", ->
    expect(renderer.mime).toEqual('text/html')

  describe 'render', ->

    it 'should call res.set with Content-Type header', ->
      req =
        message: 'ONE'
        subtitle: 'TWO'
      res =
        set: jasmine.createSpy()
        send: jasmine.createSpy()
      renderer.render(req,res)

      expect(res.set).toHaveBeenCalledWith('Content-Type', 'text/html')

    it 'should call res.send with correct params', ->
      req =
        message: 'ONE'
        subtitle: 'TWO'
      res =
        set: jasmine.createSpy()
        send: jasmine.createSpy()
      renderer.render(req,res)

      expect(res.send).toHaveBeenCalledWith('<html>
  <head>
    <title>FOAAS - ONE - TWO</title>
    <meta charset="utf-8">
    <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet">
  </head>

  <body style="margin-top:40px;">
    <div class="container">
      <div id="view-10" view=""><div class="hero-unit">
        <h1>ONE</h1>
        <p><em>TWO</em></p>
        </div>
      </div>
    </div>
    <script>!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-42551488-1","herokuapp.com"),ga("send","pageview");</script>
  </body>
</html>')
   
    it 'should sanitize params', ->
      req =
        message: '<one>ONE</one>'
        subtitle: '<two>TWO</two>'
      res =
        set: jasmine.createSpy()
        send: jasmine.createSpy()
      renderer.render(req,res)

      expect(res.send).toHaveBeenCalledWith('<html>
  <head>
    <title>FOAAS - &lt;one&gt;ONE&lt;/one&gt; - &lt;two&gt;TWO&lt;/two&gt;</title>
    <meta charset="utf-8">
    <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet">
  </head>

  <body style="margin-top:40px;">
    <div class="container">
      <div id="view-10" view=""><div class="hero-unit">
        <h1>&lt;one&gt;ONE&lt;/one&gt;</h1>
        <p><em>&lt;two&gt;TWO&lt;/two&gt;</em></p>
        </div>
      </div>
    </div>
    <script>!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-42551488-1","herokuapp.com"),ga("send","pageview");</script>
  </body>
</html>')
   