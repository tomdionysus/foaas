path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class King extends BaseOperation

  handler: (req, res, output) ->
    message = "Oh fuck off, just really fuck off you total dickface. Christ #{req.params.name}, you are fucking thick."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new King "King", '/king/:name/:from', [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]