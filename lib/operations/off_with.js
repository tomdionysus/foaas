const URL = '/off-with/:behavior/:from'
module.exports = {
  name: 'Fuck Off With',
  url: URL,
  fields: [
    { name: 'Behavior', field: 'behavior' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get(URL, function (req, res) {
      const message = `Fuck off with ${req.params.behavior}`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
