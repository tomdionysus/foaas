module.exports = {
    name: 'Disappointment',
    url: '/disappointment/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/disappointment/:from', function (req, res) {
        const message = 'Life is full of disappointments, just ask your parents.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  