class BaseOperation
  
  constructor: (@name, @url, @fields, @excludeFromRandom = false) ->

  handler: (req, res, output, version) ->
    message = "Base Handler (please implement handler in your subclass"
    subtitle = "- FOAAS"
    output(req, res, message, subtitle)

  register: (app, output, version) ->
    self = this
    app.get @url, (req, res) ->
      self.handler req, res, output, version

module.exports = BaseOperation