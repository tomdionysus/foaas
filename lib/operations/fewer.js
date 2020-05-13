module.exports = {
  name: 'Disappoint Fewer People',
  url: '/fewer/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/fewer/:name/:from', function (req, res) {
      const message = `Go fuck yourself ${req.params.name}, you'll disappoint fewer people.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
