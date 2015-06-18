path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Xmas extends BaseOperation

  handler: (req, res, output) ->
    message = "Merry Fucking Christmas, #{req.params.name}."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Xmas "Xmas", '/xmas/:name/:from', [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ], true