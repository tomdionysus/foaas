path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Bucket extends BaseOperation

  handler: (req, res, output) ->
    message = "Please choke on a bucket of cocks."
    subtitle = "- #{req.params.from}"
    output(req, res, message, subtitle)

module.exports = new Bucket "Bucket", '/bucket/:from', [
    { name: 'From', field: 'from'}
  ]