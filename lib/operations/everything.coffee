path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Everything extends BaseOperation

  handler: (req, res, output) ->
    message = "Fuck everything."
    subtitle = "- #{req.params. from}"
    output(req, res, message, subtitle)

module.exports = new Everything "Everything", '/everything/:from', [
    { name: 'From', field: 'from'}
  ]