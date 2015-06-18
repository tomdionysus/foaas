path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Bye extends BaseOperation

  handler: (req, res, output) ->
    message = "Fuckity bye!"
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Bye "Bye", '/bye/:from', [
    { name: 'From', field: 'from'}
  ]