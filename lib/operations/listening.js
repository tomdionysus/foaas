module.exports = {
    name: 'Listening',
    url: '/listening/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/listening/:from', function (req, res) {
        const message = 'If you don\'t mind, I would like to stop listening to you now.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }