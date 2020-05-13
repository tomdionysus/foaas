module.exports = {
  name: 'Check your fucking logs!',
  url: '/logs/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/logs/:from', function (req, res) {
      const message = 'Check your fucking logs!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
