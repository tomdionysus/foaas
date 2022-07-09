module.exports = {
  name: 'Programmer',
  url: '/programmer/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/programmer/:from', function (req, res) {
      const message = "You code monkey, I'm a programmer, bitch!"
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
