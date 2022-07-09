module.exports = {
    name: 'Weight',
    url: '/weight/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/weight/:from', function (req, res) {
        const message = 'I hope you lose weight so there’ll be less of you!'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }