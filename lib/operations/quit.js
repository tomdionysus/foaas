module.exports = {
    name: 'Quit',
    url: '/quit/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/quit/:from', function (req, res) {
        const message = 'Just quit being yourself.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }