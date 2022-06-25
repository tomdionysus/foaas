module.exports = {
  name: 'sake',
  url: '/sake/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/sake/:from', function (req, res) {
      const message = "For fork's sake!"
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
