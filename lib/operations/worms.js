module.exports = {
    name: 'Worms',
    url: '/worms/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/worms/:from', function (req, res) {
        const message = 'Thy tongue outvenoms all the worms of Nile.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  