path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Linus extends BaseOperation

  handler: (req, res, output) ->
    message = "#{req.params.name}, there aren't enough swear-words in the English language, so now I'll have to call you perkeleen vittupää just to express my disgust and frustration with this crap."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Linus "Linus", '/linus/:name/:from', [
    { name: 'Name', field: 'name'}
    { name: 'From', field: 'from'}
  ]