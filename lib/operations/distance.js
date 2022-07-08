module.exports = {
    name: 'Distance',
    url: '/distance/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/distance/:from', function (req, res) {
        const message = 'I wish there was some distance between us.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }