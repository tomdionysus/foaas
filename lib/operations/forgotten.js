module.exports = {
  name: 'Forgotten',
  url: '/forgotten/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/forgotten/:from', function (req, res) {
      const message = 'Child, I’ve forgotten more than you ever knew.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}