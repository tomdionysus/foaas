path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Dalton extends BaseOperation

  handler: (req, res, output) ->
    message = "#{req.params.name}: A fucking problem solving super-hero."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Dalton "Dalton", '/dalton/:name/:from', [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]