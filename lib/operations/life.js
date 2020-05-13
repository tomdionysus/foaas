module.exports = {
  name: 'Life',
  url: '/life/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/life/:from', function (req, res) {
      const message = 'Fuck my life.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
