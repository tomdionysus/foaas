module.exports = {
    name: 'Goodtime',
    url: '/goodtime/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/goodtime/:from', function (req, res) {
        const message = 'This isn\'t a good time. In fact, never is a good time.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }