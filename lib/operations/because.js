module.exports = {
  name: 'Because',
  url: '/because/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/because/:from', function (req, res) {
      const message = "Why? Because fuck you, that's why."
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
