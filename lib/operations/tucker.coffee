path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Tucker extends BaseOperation

  handler: (req, res, output) ->
    message = "Come the fuck in or fuck the fuck off."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Tucker "Tucker", '/tucker/:from', [
    { name: 'From', field: 'from'}
  ]