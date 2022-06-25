module.exports = {
  name: 'Keep',
  url: '/keep/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/keep/:name/:from', function (req, res) {
      const message = `${req.params.name}: fork off. And when you get there, fork off from there too. Then fork off some more. Keep forking off until you get back here. Then fork off again.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
