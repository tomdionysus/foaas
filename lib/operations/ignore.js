module.exports = {
  name: 'Ignore',
  url: '/ignore/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/ignore/:from', function (req, res) {
      const message = 'I’m busy right now, can I ignore you another time?'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
