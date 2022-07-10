module.exports = {
  name: 'Flying',
  url: '/flying/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/flying/:from', function (req, res) {
      const message = "I don't give a flying pig, or elephant for that matter."
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
