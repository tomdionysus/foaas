module.exports = {
  name: 'Question',
  url: '/question/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/question/:from', function (req, res) {
      const message = 'To fuck off, or to fuck off (that is not a question)'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
