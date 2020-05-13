module.exports = {
  name: 'What',
  url: '/what/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/what/:from', function (req, res) {
      const message = 'What the fuck‽'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
