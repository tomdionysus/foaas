path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Diabetes extends BaseOperation

  handler: (req, res, output) ->
    message = "I'd love to stop and chat to you but I'd rather have type 2 diabetes."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Diabetes "Diabetes", '/diabetes/:from', [
    { name: 'From', field: 'from'}
  ]