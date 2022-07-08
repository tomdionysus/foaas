module.exports = {
    name: 'Absence',
    url: '/absence/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/absence/:from', function (req, res) {
        const message = 'Your absence is required.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }