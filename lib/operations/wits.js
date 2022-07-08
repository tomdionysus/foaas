module.exports = {
    name: 'Wits',
    url: '/wits/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/wits/:from', function (req, res) {
        const message = 'I refuse to enter a battle of wits with an unarmed opponent.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  