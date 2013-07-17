express = require 'express'

template = (message, subtitle) -> '
<html>
  <head>
    <title>Fuck Off As A Service (FOAAS)</title>

    <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet">
  </head>

  <body style="">
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

app.use (req, res) ->
  res.sendfile("index.html")


app.get '/off/:name/:from', (req, res) ->
  message = "Fuck off, #{req.params.name}."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/you/:name', (req, res) ->
  message = "Fuck you, #{req.params.name}."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/everyone/:from', (req, res) ->
  message = "Everyone can go and fuck off."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/donut/:name/:from', (req, res) ->
  message = "#{req.params.name}, go and take a flying fuck at a rolling donut."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)


app.listen 3000 
console.log 'Listening on port 3000'