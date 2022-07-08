module.exports = {
    name: 'Day',
    url: '/day/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/day/:from', function (req, res) {
        const message = 'I hope your day is filled with people like you.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }