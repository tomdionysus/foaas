path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Bus extends BaseOperation

  handler: (req, res, output) ->
    message = "Christ on a bendy-bus, #{req.params.name}, don't be such a fucking faff-arse."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Bus "Bus", '/bus/:name/:from', [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]