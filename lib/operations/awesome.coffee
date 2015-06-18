path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Awesome extends BaseOperation

  handler: (req, res, output) ->
    message = "This is Fucking Awesome."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Awesome "Awesome", '/awesome/:from', [
  { name: 'From', field: 'from'}], true