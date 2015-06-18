path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Family extends BaseOperation

  handler: (req, res, output) ->
    message = "Fuck you, your whole family, your pets, and your feces."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Family "Family", '/family/:from', [
    { name: 'From', field: 'from'}
  ]