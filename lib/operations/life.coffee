path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Life extends BaseOperation

  handler: (req, res, output) ->
    message = "Fuck my life."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Life "Life", '/life/:from', [
    { name: 'From', field: 'from'}
  ]