module.exports = {
    name: 'Hard',
    url: '/hard/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/hard/:from', function (req, res) {
        const message = 'You are hard to look at.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  