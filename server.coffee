express = require 'express'
sanitizer = require 'sanitizer'



template = (message, subtitle) -> '
<html>
  <head>
    <title>Fuck Off As A Service (FOAAS)</title>
    <meta charset="utf-8">
    <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet">
  </head>

  <body style="margin-top:40px;">
    <div class="container">
      <div id="view-10" view=""><div class="hero-unit">
        <h1>'+sanitizer.escape(message)+'</h1>
        <p><em>'+sanitizer.escape(subtitle)+'</em></p>
        </div>
      </div>
    </div>
    <script>!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-42551488-1","herokuapp.com"),ga("send","pageview");</script>
  </body>
</html>'



doOutput = (res, message, subtitle) ->
  res.format
    "text/plain": ->
      res.send "#{message} #{subtitle}"
    "application/json": ->
      res.send JSON.stringify { message: message, subtitle: subtitle }
    "text/html": ->
      res.send template(message,subtitle)



app = express()
app.use(express.bodyParser())
app.use(express.methodOverride())
app.use(app.router)
app.use(express.static('./public'))
app.use (req, res) ->
  res.sendfile("./public/index.html")



app.get '/:style/:name/:from', (req, res) ->
  style = req.params.style
  name = req.params.name
  from = req.params.from

  paths = 
    off:
      message: "Fuck off, #{name}."
      subtitle: "- #{from}"
    you:
      message: "Fuck you, #{name}."
      subtitle: "- #{from}"

    donut:
      message: "#{name}, go and take a flying fuck at a rolling donut."
      subtitle: "- #{from}"

    shakespeare:
      message: "#{name}, Thou clay-brained guts, thou knotty-pated fool, thou whoreson obscene greasy tallow-catch!"
      subtitle: "- #{from}"

    linus:
      message: "#{name}, there aren't enough swear-words in the English language, so now I'll have to call you perkeleen vittupää just to express my disgust and frustration with this crap."
      subtitle: "- #{from}"

    king:
      message: "Oh fuck off, just really fuck off you total dickface. Christ #{name}, you are fucking thick."
      subtitle: "- #{from}"

    chainsaw:
      message: "Fuck me gently with a chainsaw, #{name}. Do I look like Mother Teresa?"
      subtitle: "- #{from}"

    outside:
      message: "#{req.params.name}, why don't you go outside and play hide-and-go-fuck-yourself?"
      subtitle: "- #{from}"

  if style == 'random'
    path = Object.keys( paths )
    index = Math.floor( Math.random() * path.length )
    res.redirect '/' + path[index] + '/' + name + '/' + from

  else
    doOutput(res, paths[style].message, paths[style].subtitle)



app.get '/:style/:from', (req, res) ->
  style = req.params.style
  from = req.params.from

  paths =
    this:
      message: "Fuck this."
      subtitle: "- #{from}"

    that:
      message: "Fuck that."
      subtitle: "- #{from}"

    everything:
      message: "Fuck everything."
      subtitle: "- #{from}"

    everyone:
      message: "Everyone can go and fuck off."
      subtitle: "- #{from}"

    pink:
      message: "Well, Fuck me pink."
      subtitle: "- #{from}"

    life:
      message: "Fuck my life."
      subtitle: "- #{from}"

    thanks:
      message: "Fuck you very much."
      subtitle: "- #{from}"

    life:
      message: "Fuck my life."
      subtitle: "- #{from}"

    thing:
      message: "Fuck #{style}"
      subtitle: "- #{from}"

  if style == 'random'
    path = Object.keys( paths )
    index = Math.floor( Math.random() * path.length )
    res.redirect '/' + path[index] + '/' + from

  if Object.keys( paths ).indexOf(style) == -1
    doOutput(res, paths.thing.message, paths.thing.subtitle)

  else
    doOutput(res, paths[style].message, paths[style].subtitle)



port = process.env.PORT || 5000 
app.listen port
console.log "FOAAS Started on port #{port}"
