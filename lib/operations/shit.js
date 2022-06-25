module.exports = {
  name: 'fork This Shit',
  url: '/shit/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/shit/:from', function (req, res) {
      const message = 'fork this shit!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
