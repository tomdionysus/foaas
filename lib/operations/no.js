module.exports = {
  name: 'No',
  url: '/no/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/no/:from', function (req, res) {
      const message = 'No shit given.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
