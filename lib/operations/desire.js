module.exports = {
    name: 'Desire',
    url: '/desire/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/desire/:from', function (req, res) {
        const message = 'I desire that we be better strangers.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  