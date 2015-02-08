require 'newrelic'

path = require 'path'
FOAAS = require path.resolve(__dirname,'foaas')

foaas = new FOAAS({
  renderersPath: path.resolve(__dirname,'renderers')
  filtersPath: path.resolve(__dirname,'filters')
  operationsPath: path.resolve(__dirname,'operations')
})

port = process.env.PORT || 5000

foaas.start(port)


