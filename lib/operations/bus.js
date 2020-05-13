module.exports = {
  name: 'Bus',
  url: '/bus/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/bus/:name/:from', function (req, res) {
      const message = `Christ on a bendy-bus, ${req.params.name}, don't be such a fucking faff-arse.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
