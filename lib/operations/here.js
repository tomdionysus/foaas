module.exports = {
    name: 'Here',
    url: '/here/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/here/:from', function (req, res) {
        const message = 'Oh! You are still here?'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }