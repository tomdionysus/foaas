module.exports = {
  name: 'Family',
  url: '/family/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/family/:from', function (req, res) {
      const message = 'Fuck you, your whole family, your pets, and your feces.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
