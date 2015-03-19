express = require 'express'
fs = require 'fs'
path = require 'path'
npmPackage = require path.resolve(__dirname,'../package.json') 

module.exports = class FOAAS

  VERSION: npmPackage.version

  constructor: (options) ->
    # Internal State.
    @operations = {}
    @operationsArray = []
    @formats = {}
    @formatsArray = []
    @filters = {}

    # Main App
    @app = express()

    # Plugin Paths
    renderersPath = options.renderersPath || 'renderers'
    filtersPath = options.filtersPath || 'filters'
    operationsPath = options.operationsPath || 'operations'

    # A man is not dead while his name is still spoken.
    @app.use (req, res, next) ->
      res.header 'X-Clacks-Overhead', 'GNU Terry Pratchett'
      next()
      
    # Standard Middleware
    @app.use(express.bodyParser())
    @app.use(express.methodOverride())
    
    # Load Filters
    @loadFilters(filtersPath)

    # Send very permissive CORS headers.
    @app.use (req, res, next) ->
      res.header 'Access-Control-Allow-Origin', '*'
      res.header 'Access-Control-Allow-Methods', 'GET, OPTIONS'
      res.header 'Access-Control-Allow-Headers', 'Content-Type'
      next()


    # Express Router
    @app.use(@app.router)

    # Operations
    @loadOperations(operationsPath)

    # All Public Resources.
    @app.use(express.static('./public'))

    # GET / and /index.html sends index HTML page.
    @app.get '/', @sendIndex
    @app.get 'index.html', @sendIndex

    # OPTIONS on any route sends CORS above and ends
    @app.options "*", (req, res) ->
      res.end()

    # Final case, send 404 Not Found
    @app.use @send404
    
    # Renderers
    @loadRenderers(renderersPath)

  send404: (req, res) =>
    res.status(404)
    @output(req, res, "404 - Not Found", 'FOAAS')

  sendIndex: (req, res) ->
    res.sendfile("./public/index.html")

  loadRenderers: (path) =>
    for file in fs.readdirSync(path)
      renderer = require path+'/'+file
      @formatsArray.push renderer.mime
      @formats[renderer.mime] = renderer.render

  loadFilters: (path) =>
    for file in fs.readdirSync(path)
      filter = require path+'/'+file
      filter.register(@app) if filter.register?
      @filters[filter.name] = filter

  loadOperations: (path) =>
    for file in fs.readdirSync(path)
      operation = require path+'/'+file
      operation.register(@app, @output, @VERSION)
      @operationsArray.push
        name: operation.name
        url: operation.url
        fields: operation.fields
      @operations[operation.url] = operation

    # /operations endpoint
    @app.get '/operations', (req, res) =>
      res.send @operationsArray

    # Default Operation
    @app.get '/:thing/:from', (req, res) =>
      message = "Fuck #{req.params.thing}."
      subtitle = "- #{req.params.from}"
      @output(req, res, message, subtitle)

  start: (port) =>
    @app.listen port
    console.log "FOAAS v#{@VERSION} Started on port #{port}"

  output: (req, res, message, subtitle) =>
    filters = []
    for name, filter of @filters
      filters.push filter.process if filter.applies(req, message, subtitle) 

    final = @outputFinal
    rout = (req,res,message,subtitle) ->
      (filters.pop() || final)(req,res,message,subtitle,rout)

    rout(req,res,message,subtitle)

  outputFinal: (req,res,message,subtitle) =>
    mime = req.accepts(@formatsArray)

    unless mime?
      res.status 406
      res.end()
      return

    @formats[mime](res, message, subtitle)
    res.end()

    


