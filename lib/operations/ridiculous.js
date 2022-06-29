module.exports = {
  name: "That's forking ridiculous",
  url: '/ridiculous/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/ridiculous/:from', function (req, res) {
      const message = "That's forking ridiculous"
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
