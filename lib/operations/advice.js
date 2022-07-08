module.exports = {
    name: 'Advice',
    url: '/advice/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/advice/:from', function (req, res) {
        const message = 'Whoever told you to be yourself simply couldn’t have given you worse advice.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  