module.exports = {
  name: 'Flying',
  url: '/flying/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/flying/:from', function (req, res) {
      const message = "I don't give a flying fuck."
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
