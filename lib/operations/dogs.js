module.exports = {
    name: 'Dogs',
    url: '/dogs/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/dogs/:from', function (req, res) {
        const message = 'Even dogs don’t like you.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  