module.exports = {
  name: 'Fuck Off',
  url: '/off/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/off/:name/:from', function (req, res) {
      const message = `Fuck off, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
