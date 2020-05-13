module.exports = {
  name: 'RTFM',
  url: '/rtfm/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/rtfm/:from', function (req, res) {
      const message = 'Read the fucking manual!'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
