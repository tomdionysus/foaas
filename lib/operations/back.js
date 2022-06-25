module.exports = {
  name: 'Back the fork off',
  url: '/back/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/back/:name/:from', function (req, res) {
      const message = `${req.params.name}, back the fork off.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
