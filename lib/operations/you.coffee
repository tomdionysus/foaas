path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class FuckYou extends BaseOperation

  handler: (req, res, output) ->
    message = "Fuck you, #{req.params.name}."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new FuckYou "Fuck You", '/you/:name/:from', [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]