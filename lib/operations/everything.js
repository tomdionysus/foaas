module.exports = {
  name: 'Everything',
  url: '/everything/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/everything/:from', function (req, res) {
      const message = 'Screw everything.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
