path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Outside extends BaseOperation

  handler: (req, res, output) ->
    message = "#{req.params.name}, why don't you go outside and play hide-and-go-fuck-yourself?"
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Outside "Outside", '/outside/:name/:from', [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]