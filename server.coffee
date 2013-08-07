express = require 'express'
sanitizer = require 'sanitizer'

operations = require './lib/operations'

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

dooutput = (res, message, subtitle) ->
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

app.use (req, res, next) ->
  res.header 'Access-Control-Allow-Origin', '*'
  res.header 'Access-Control-Allow-Methods', 'GET, OPTIONS'
  res.header 'Access-Control-Allow-Headers', 'Content-Type'
  next()

app.use(app.router)
app.use(express.static('./public'))
app.use (req, res) ->
  res.sendfile("./public/index.html")

app.options "*", (req, res) ->
  res.header 'Access-Control-Allow-Origin', '*'
  res.header 'Access-Control-Allow-Methods', 'GET, OPTIONS'
  res.header 'Access-Control-Allow-Headers', 'Content-Type'
  res.end()

app.get '/off/:name/:from', (req, res) ->
  message = "Fuck off, #{req.params.name}."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/you/:name/:from', (req, res) ->
  message = "Fuck you, #{req.params.name}."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/this/:from', (req, res) ->
  message = "Fuck this."
  subtitle = "- #{req.params. from}"
  dooutput(res, message, subtitle)

app.get '/that/:from', (req, res) ->
  message = "Fuck that."
  subtitle = "- #{req.params. from}"
  dooutput(res, message, subtitle)

app.get '/everything/:from', (req, res) ->
  message = "Fuck everything."
  subtitle = "- #{req.params. from}"
  dooutput(res, message, subtitle)

app.get '/everyone/:from', (req, res) ->
  message = "Everyone can go and fuck off."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/donut/:name/:from', (req, res) ->
  message = "#{req.params.name}, go and take a flying fuck at a rolling donut."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/shakespeare/:name/:from', (req, res) ->
  message = "#{req.params.name}, Thou clay-brained guts, thou knotty-pated fool, thou whoreson obscene greasy tallow-catch!"
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/linus/:name/:from', (req, res) ->
  message = "#{req.params.name}, there aren't enough swear-words in the English language, so now I'll have to call you perkeleen vittupää just to express my disgust and frustration with this crap."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/king/:name/:from', (req, res) ->
  message = "Oh fuck off, just really fuck off you total dickface. Christ #{req.params.name}, you are fucking thick."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/pink/:from', (req, res) ->
  message = "Well, Fuck me pink."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/life/:from', (req, res) ->
  message = "Fuck my life."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/chainsaw/:name/:from', (req, res) ->
  message = "Fuck me gently with a chainsaw, #{req.params.name}. Do I look like Mother Teresa?"
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/outside/:name/:from', (req, res) ->
  message = "#{req.params.name}, why don't you go outside and play hide-and-go-fuck-yourself?"
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/thanks/:from', (req, res) ->
  message = "Fuck you very much."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/flying/:from', (req, res) ->
  message = "I don't give a flying fuck. - #{req.params.from}."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/fascinating/:from', (req, res) ->
  message = "Fascinating story, in what chapter do you shut the fuck up? - #{req.params.from}."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

###
  Additional routes should go above the catchall /:thing/ route
###
app.get '/:thing/:from', (req, res) ->
  message = "Fuck #{req.params.thing}."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

operations(app)

port = process.env.PORT || 5000
app.listen port
console.log "FOAAS Started on port #{port}"
