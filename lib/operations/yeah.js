module.exports = {
  name: 'Yeah',
  url: '/yeah/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/yeah/:from', function (req, res) {
      const message = 'Yeah, you do it your way and I will do it the correct way.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
