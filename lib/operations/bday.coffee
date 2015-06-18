path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Bday extends BaseOperation

  handler: (req, res, output) ->
    message = "Happy Fucking Birthday, #{req.params.name}."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Bday "Bday", '/bday/:name/:from', [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ], true
