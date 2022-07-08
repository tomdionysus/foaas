module.exports = {
    name: 'People',
    url: '/people/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/people/:from', function (req, res) {
        const message = 'Sorry, but I just can\'t \'people\' right now.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }