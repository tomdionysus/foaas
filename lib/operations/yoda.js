module.exports = {
  name: 'Yoda',
  url: '/yoda/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/yoda/:name/:from', function (req, res) {
      const message = `Fuck off, you must, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
