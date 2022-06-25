module.exports = {
  name: 'fork Me',
  url: '/me/:from',
  fields: [{ name: 'From', field: 'from' }],

  register (app, output) {
    return app.get('/me/:from', function (req, res) {
      const message = 'fork me.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
