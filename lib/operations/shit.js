module.exports = {
  name: 'fork This Shit',
  url: '/shit/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/shit/:from', function (req, res) {
      const message = 'You are so full of shit, the toilet’s jealous.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
