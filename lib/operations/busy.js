module.exports = {
    name: 'Busy',
    url: '/busy/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/busy/:from', function (req, res) {
        const message = 'Get busy leaving, or get busy dying.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }