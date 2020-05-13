module.exports = {
  name: 'Zayn',
  url: '/zayn/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/zayn/:from', function (req, res) {
      const message = 'Ask me if I give a motherfuck ?!!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
