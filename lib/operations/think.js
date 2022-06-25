module.exports = {
  name: 'You Think',
  url: '/think/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/think/:name/:from', function (req, res) {
      const message = `${req.params.name}, you think I give a fork?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
