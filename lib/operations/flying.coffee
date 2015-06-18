path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Flying extends BaseOperation

  handler: (req, res, output) ->
    message = "I don't give a flying fuck."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Flying "Flying", '/flying/:from', [
    { name: 'From', field: 'from'}
  ]