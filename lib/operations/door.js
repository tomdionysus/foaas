module.exports = {
    name: 'Door',
    url: '/door/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/door/:from', function (req, res) {
        const message = 'You’re about as useful as a screen door in a submarine.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  