path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class CoolStory extends BaseOperation

  handler: (req, res, output) ->
    message = "Cool story, bro."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new CoolStory "Cool Story", '/cool/:from', [
    { name: 'From', field: 'from'}
  ], true