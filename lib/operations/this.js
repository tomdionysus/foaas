module.exports = {
  name: 'Fuck This',
  url: '/this/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/this/:from', function (req, res) {
      const message = 'Fuck this.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
