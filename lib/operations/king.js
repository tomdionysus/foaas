module.exports = {
  name: 'King',
  url: '/king/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/king/:name/:from', function (req, res) {
      const message = `Oh fuck off, just really fuck off you total dickface. Christ, ${req.params.name}, you are fucking thick.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
