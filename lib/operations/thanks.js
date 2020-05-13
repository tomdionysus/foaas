module.exports = {
  name: 'Thanks',
  url: '/thanks/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/thanks/:from', function (req, res) {
      const message = 'Fuck you very much.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
