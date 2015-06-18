path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class What extends BaseOperation

  handler: (req, res, output) ->
    message = "What the fuck‽"
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new What "What", '/what/:from', [
    { name: 'From', field: 'from'}
  ]