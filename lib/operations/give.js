module.exports = {
  name: 'Give',
  url: '/give/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/give/:from', function (req, res) {
      const message = 'I give zero fucks.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
