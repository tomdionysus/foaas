require 'newrelic'

path = require 'path'
FOAAS = require path.resolve(__dirname,'foaas')

foaas = new FOAAS()

foaas.loadRenderers(path.resolve(__dirname,'renderers'))
foaas.loadOperations(path.resolve(__dirname,'operations'))

port = process.env.PORT || 5000

foaas.start(port)


