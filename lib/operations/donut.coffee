path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Donut extends BaseOperation

  handler: (req, res, output) ->
    message = "#{req.params.name}, go and take a flying fuck at a rolling donut."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Donut "Donut", '/donut/:name/:from', [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]