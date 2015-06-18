path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Everyone extends BaseOperation

  handler: (req, res, output) ->
    message = "Everyone can go and fuck off."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Everyone "Everyone", '/everyone/:from', [
    { name: 'From', field: 'from'}
  ]