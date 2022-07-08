module.exports = {
    name: 'Sun',
    url: '/sun/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/sun/:from', function (req, res) {
        const message = 'You are like the sun, not because you light up my world but because it hurts to look at you.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  