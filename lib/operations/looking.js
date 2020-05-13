module.exports = {
  name: 'Looking',
  url: '/looking/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/looking/:from', function (req, res) {
      const message = 'Looking for a fuck to give.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
