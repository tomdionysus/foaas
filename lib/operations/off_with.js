const URL = '/off-with/:behavior/:from'
module.exports = {
  name: 'fork Off With',
  url: URL,
  fields: [
    { name: 'Behavior', field: 'behavior' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get(URL, function (req, res) {
      const message = `fork off with ${req.params.behavior}`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
