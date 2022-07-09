module.exports = {
    name: 'Smart',
    url: '/smart/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/smart/:from', function (req, res) {
        const message = 'I hope to be as smart as you are someday.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  