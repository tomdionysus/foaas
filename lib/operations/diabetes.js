module.exports = {
  name: 'Diabetes',
  url: '/diabetes/:from/:type',
  fields: [
    { name: 'From', field: 'from' },
    { name: 'Type', field: 'type' }
  ],

  register (app, output) {
    return app.get('/diabetes/:from/:type', function (req, res) {
      const message = `I'd love to stop and chat to you but I'd rather have type ${req.params.type} diabetes.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
