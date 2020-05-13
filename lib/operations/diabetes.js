module.exports = {
  name: 'Diabetes',
  url: '/diabetes/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/diabetes/:from', function (req, res) {
      const message = "I'd love to stop and chat to you but I'd rather have type 2 diabetes."
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
