module.exports = {
    name: 'Try',
    url: '/try/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/try/:from', function (req, res) {
        const message = 'You try so hard.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  