module.exports = {
    name: 'Average',
    url: '/average/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/average/:from', function (req, res) {
        const message = 'You are completely average at everything you do.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  