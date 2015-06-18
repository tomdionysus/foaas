path = require 'path'
BaseOperation = require path.resolve(__dirname,'../baseOperation')

class Version extends BaseOperation

  handler: (req, res, output, version) ->
    message = "Version #{version}"
    subtitle = "FOAAS"
    output(req, res, message, subtitle)

module.exports = new Version "Version", '/version', [], true