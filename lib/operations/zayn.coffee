path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Zayn extends BaseOperation

  handler: (req, res, output) ->
    message = "Ask me if I give a motherfuck ?!!"
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Zayn "Zayn", '/zayn/:from', [
    { name: 'From', field: 'from'}
  ]