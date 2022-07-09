module.exports = {
  name: 'Pink',
  url: '/pink/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/pink/:from', function (req, res) {
      const message = 'Well, colour me pink.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
