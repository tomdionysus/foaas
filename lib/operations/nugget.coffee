path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Nugget extends BaseOperation

  handler: (req, res, output) ->
    message  = "Well #{req.params.name}, aren't you a shining example of a rancid fuck-nugget."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Nugget "Nugget", '/nugget/:name/:from', [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]