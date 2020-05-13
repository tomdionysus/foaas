module.exports = {
  name: 'Retard',
  url: '/retard/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/retard/:from', function (req, res) {
      const message = 'You Fucktard!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
