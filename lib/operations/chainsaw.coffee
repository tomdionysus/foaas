path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class ChainSaw extends BaseOperation

  handler: (req, res, output) ->
    message = "Fuck me gently with a chainsaw, #{req.params.name}. Do I look like Mother Teresa?"
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new ChainSaw "Chainsaw", '/chainsaw/:name/:from', [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]