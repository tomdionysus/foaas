module.exports = {
  name: 'LowPoly',
  url: '/lowpoly/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/lowpoly/:from', function (req, res) {
      const message = 'You low polygon squid!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
