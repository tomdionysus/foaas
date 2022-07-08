module.exports = {
    name: 'Squat',
    url: '/squat/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/squat/:from', function (req, res) {
        const message = 'Go squat in a cactus patch.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }