module.exports = {
  name: 'Single',
  url: '/single/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/single/:from', function (req, res) {
      const message = 'Not a single fork was given.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
