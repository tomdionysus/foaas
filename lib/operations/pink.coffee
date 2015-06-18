path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Pink extends BaseOperation

  handler: (req, res, output) ->
    message = "Well, Fuck me pink."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Pink "Pink", '/pink/:from', [
    { name: 'From', field: 'from'}
  ]