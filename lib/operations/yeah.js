module.exports = {
  name: 'Yeah',
  url: '/yeah/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/yeah/:from', function (req, res) {
      const message = 'Fuck YEAH!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
