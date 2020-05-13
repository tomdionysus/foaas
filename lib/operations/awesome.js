module.exports = {
  name: 'Awesome',
  url: '/awesome/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/awesome/:from', function (req, res) {
      const message = 'This is Fucking Awesome.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
