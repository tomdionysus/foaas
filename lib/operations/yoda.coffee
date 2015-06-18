path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Yoda extends BaseOperation

  handler: (req, res, output) ->
    message = "Fuck off, you must, #{req.params.name}."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Yoda "Yoda", '/yoda/:name/:from', [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]