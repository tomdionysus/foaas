express = require 'express'

template = (message, subtitle) -> '
<html>
  <head>
    <title>Fuck Off As A Service (FOAAS)</title>

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
  </body>
</html>'

dooutput = (res, message, subtitle) ->
  res.format
    "text/plain": ->
      res.send "#{message} - #{subtitle}"
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

app.get '/linus/:name/:from', (req, res) ->
  message = "#{req.params.name}, there aren't enough swear-words in the English language, so now I'll have to call you perkeleen vittupää just to express my disgust and frustration with this crap."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

port = process.env.PORT || 5000 
app.listen port
console.log "FOAAS Started on port #{port}"
