module.exports = {
    name: 'Dirt',
    url: '/dirt/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/dirt/:from', function (req, res) {
        const message = 'O gull, O dolt, As ignorant as dirt.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  