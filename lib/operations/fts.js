module.exports = {
  name: 'fork That Shit',
  url: '/fts/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/fts/:name/:from', function (req, res) {
      const message = `fork that shit, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
