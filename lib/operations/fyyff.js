module.exports = {
  name: 'FYYFF',
  url: '/fyyff/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/fyyff/:from', function (req, res) {
      const message = 'fork you, you forking fork.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
