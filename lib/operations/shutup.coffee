path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class ShutUp extends BaseOperation

  handler: (req, res, output) ->
    message = "#{req.params.name}, shut the fuck up."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new ShutUp "Shut Up", '/shutup/:name/:from', [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]