module.exports = {
  name: 'Golf Foxtrot Yankee',
  url: '/gfy/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/gfy/:name/:from', function (req, res) {
      const message = `Golf foxtrot yankee, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
