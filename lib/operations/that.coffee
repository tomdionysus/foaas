path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class FuckThat extends BaseOperation

  handler: (req, res, output) ->
    message = "Fuck that."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new FuckThat "Fuck That", '/that/:from', [
    { name: 'From', field: 'from'}
  ]