module.exports = {
  name: 'Too',
  url: '/too/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/too/:from', function (req, res) {
      const message = 'Thanks, fuck you too.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
