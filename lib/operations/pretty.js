module.exports = {
    name: 'Pretty',
    url: '/pretty/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/pretty/:from', function (req, res) {
        const message = 'You’re not pretty enough to be that stupid.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  