module.exports = {
  name: 'fork That',
  url: '/that/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/that/:from', function (req, res) {
      const message = 'fork that.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
