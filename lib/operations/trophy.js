module.exports = {
  name: 'Trophy',
  url: '/trophy/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/trophy/:from', function (req, res) {
      const message = 'If you were an inanimate object, you’d be a participation trophy.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
