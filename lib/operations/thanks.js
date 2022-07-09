module.exports = {
  name: 'Thanks',
  url: '/thanks/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/thanks/:from', function (req, res) {
      const message = 'There are some remarkably dumb people in this world. Thanks for helping me understand that.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
