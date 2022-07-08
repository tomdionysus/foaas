module.exports = {
    name: 'Tolerate',
    url: '/tolerate/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/tolerate/:from', function (req, res) {
        const message = 'People tolerate you.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  