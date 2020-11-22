module.exports = {
  name: 'This Guy Fucks!',
  url: '/guy/fucks/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/guy/fucks/:from', function (req, res) {
      const message = 'This Guy Fucks!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
