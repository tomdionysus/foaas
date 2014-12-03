require 'newrelic'

express = require 'express'
sanitizer = require 'sanitizer'

operations = require './lib/operations'
helpers = require './lib/helpers'

templateHTML = (message, subtitle) -> '
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

templateXML = (message, subtitle) -> '
<?xml version="1.0" encoding="UTF-8"?>
<foaas:response xmlns:foaas="http://foaas.com/fuckoff">
  <foaas:message>'+helpers.escapeXML(message)+'</foaas:message>
  <foaas:subtitle>'+helpers.escapeXML(subtitle)+'</foaas:subtitle>
</foaas:response>
'

dooutput = (res, message, subtitle) ->
  res.format
    "text/plain": ->
      res.send "#{message} #{subtitle}"
    "application/json": ->
      res.jsonp { message: message, subtitle: subtitle }
    "text/html": ->
      res.send templateHTML(message,subtitle)
    "application/xml": ->
      res.send templateXML(message,subtitle)

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

app.get '/version', (req, res) ->
  res.format
    "text/plain": ->
      res.send "FOAAS Version #{helpers.VERSION}"
    "application/json": ->
      res.json { version: helpers.VERSION }
    "text/html": ->
      res.send templateHTML("Version #{helpers.VERSION}",'FOAAS')
    "application/xml": ->
      res.send templateXML("Version #{helpers.VERSION}",'FOAAS')

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
  message = "I don't give a flying fuck."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/fascinating/:from', (req, res) ->
  message = "Fascinating story, in what chapter do you shut the fuck up?"
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/madison/:name/:from', (req, res) ->
  message = "What you've just said is one of the most insanely idiotic things I have ever heard, #{req.params.name}. At no point in your rambling, incoherent response were you even close to anything that could be considered a rational thought. Everyone in this room is now dumber for having listened to it. I award you no points #{req.params.name}, and may God have mercy on your soul."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/cool/:from', (req, res) ->
  message = "Cool story, bro."
  subtitle = "- #{req.params.from}"
  dooutput(res,message,subtitle)

app.get '/field/:name/:from/:reference', (req, res) ->
  message = "And #{req.params.name} said unto #{req.params.from}, 'Verily, cast thine eyes upon the field in which I grow my fucks', and #{req.params.from} gave witness unto the field, and saw that it was barren."
  reference = "- #{req.params.reference}"
  dooutput(res, message, reference)

app.get '/nugget/:name/:from', (req, res) ->
  message  = "Well #{req.params.name}, aren't you a shining example of a rancid fuck-nugget."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/yoda/:name/:from', (req, res) ->
  message = "Fuck off, you must, #{req.params.name}."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/ballmer/:name/:company/:from', (req, res) ->
  message = "Fucking #{req.params.name} is a fucking pussy. I'm going to fucking bury that guy, I have done it before, and I will do it again. I'm going to fucking kill #{req.params.company}."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/what/:from', (req, res) ->
  message = "What the fuck?!"
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/because/:from', (req, res) ->
  message = "Why? Because Fuck you, that's why."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

app.get '/caniuse/:tool/:from', (req, res) ->
  message = "Can you use #{req.params.tool}? Fuck no!"
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

###
  Additional routes should go above the catch all /:thing/ route
###
app.get '/:thing/:from', (req, res) ->
  message = "Fuck #{req.params.thing}."
  subtitle = "- #{req.params.from}"
  dooutput(res, message, subtitle)

operations(app)

port = process.env.PORT || 5000

app.listen port
console.log "FOAAS Started on port #{port}"
