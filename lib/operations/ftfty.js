module.exports = {
  name: 'fork That, fork You',
  url: '/ftfy/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/ftfy/:from', function (req, res) {
      const message = 'fork That, fork You'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
