module.exports = {
  name: 'Eyes',
  url: '/eyes/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/eyes/:from', function (req, res) {
      const message = 'Keep rolling your eyes, you might eventually find a brain.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
