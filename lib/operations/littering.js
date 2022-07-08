module.exports = {
    name: 'Littering',
    url: '/littering/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/littering/:from', function (req, res) {
        const message = 'When your mom dropped you off at school, she got a fine for littering.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  