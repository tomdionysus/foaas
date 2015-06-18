path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class FuckOff extends BaseOperation

  handler: (req, res, output) ->
    message = "Fuck off, #{req.params.name}."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new FuckOff "Fuck Off", '/off/:name/:from', [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]