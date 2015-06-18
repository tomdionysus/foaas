path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Shakespeare extends BaseOperation

  handler: (req, res, output) ->
    message = "#{req.params.name}, Thou clay-brained guts, thou knotty-pated fool, thou whoreson obscene greasy tallow-catch!"
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Shakespeare "Shakespeare", '/shakespeare/:name/:from', [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]