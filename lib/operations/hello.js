module.exports = {
    name: 'Hello',
    url: '/hello/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/hello/:from', function (req, res) {
        const message = 'You lost me at hello.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }