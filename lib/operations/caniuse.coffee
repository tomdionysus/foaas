path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class CanIUse extends BaseOperation

  handler: (req, res, output) ->
    message = "Can you use #{req.params.tool}? Fuck no!"
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new CanIUse "Can I Use", '/caniuse/:tool/:from', [
    { name: 'Tool', field: 'tool'}
    { name: 'From', field: 'from'}
  ], true