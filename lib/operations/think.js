module.exports = {
  name: 'Think',
  url: '/think/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/think/:from', function (req, res) {
      const message = 'I believe you think that.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
