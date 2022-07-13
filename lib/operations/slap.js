module.exports = {
  name: 'Slap',
  url: '/slap/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/slap/:from', function (req, res) {
      const message = "I will slap you so hard even Google won’t be able to find you."
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
