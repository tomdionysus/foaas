path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Thanks extends BaseOperation

  handler: (req, res, output) ->
    message = "Fuck you very much."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Thanks "Thanks", '/thanks/:from', [
    { name: 'From', field: 'from'}
  ]