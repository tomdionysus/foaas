path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Fascinating extends BaseOperation

  handler: (req, res, output) ->
    message = "Fascinating story, in what chapter do you shut the fuck up?"
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Fascinating "Fascinating", '/fascinating/:from', [
    { name: 'From', field: 'from'}
  ]