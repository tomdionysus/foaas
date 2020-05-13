module.exports = {
  name: 'FYYFF',
  url: '/fyyff/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/fyyff/:from', function (req, res) {
      const message = 'Fuck you, you fucking fuck.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
