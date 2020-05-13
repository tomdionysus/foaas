module.exports = {
  name: 'Fuck That',
  url: '/that/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/that/:from', function (req, res) {
      const message = 'Fuck that.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
