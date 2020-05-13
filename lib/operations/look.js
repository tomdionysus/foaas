module.exports = {
  name: 'Look',
  url: '/look/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/look/:name/:from', function (req, res) {
      const message = `${req.params.name}, do I look like I give a fuck?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
