path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Because extends BaseOperation

  handler: (req, res, output) ->
    message = "Why? Because Fuck you, that's why."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Because "Because", '/because/:from', [
    { name: 'From', field: 'from'}
  ]