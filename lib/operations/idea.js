module.exports = {
  name: 'Idea',
  url: '/idea/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/idea/:from', function (req, res) {
      const message = 'That sounds like a forking great idea!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
