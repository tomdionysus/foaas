module.exports = {
  name: 'Tucker',
  url: '/tucker/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/tucker/:from', function (req, res) {
      const message = 'Come the fuck in or fuck the fuck off.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
