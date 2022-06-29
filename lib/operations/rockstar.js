
module.exports = {
  name: 'Rockstar',
  url: '/rockstar/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/rockstar/:name/:from', function (req, res) {
      const message = `${req.params.name}, you're a forking Rock Star!`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
