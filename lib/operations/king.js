module.exports = {
  name: 'King',
  url: '/king/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/king/:name/:from', function (req, res) {
      const message = `Oh fork off, just really fork off you total twat. Christ, ${req.params.name}, you are forking thick.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
