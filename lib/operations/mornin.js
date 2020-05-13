module.exports = {
  name: 'mornin',
  url: '/mornin/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/mornin/:from', function (req, res) {
      const message = "Happy fuckin' mornin'!"
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
