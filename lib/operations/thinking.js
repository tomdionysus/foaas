module.exports = {
  name: 'Thinking',
  url: '/thinking/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/thinking/:name/:from', function (req, res) {
      const message = `${req.params.name}, what the fuck were you actually thinking?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
