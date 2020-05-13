module.exports = {
  name: 'Zero',
  url: '/zero/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/zero/:from', function (req, res) {
      const message = "Zero, that's the number of fucks I give."
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
