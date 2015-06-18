path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class FuckThis extends BaseOperation

  handler: (req, res, output) ->
    message = "Fuck this."
    subtitle = "- #{req.params. from}"
    output(req, res, message, subtitle)

module.exports = new FuckThis "Fuck This", '/this/:from', [
    { name: 'From', field: 'from'}
  ]