module.exports = {
    name: 'Quiet',
    url: '/quiet/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/quiet/:from', function (req, res) {
        const message = 'Please be quiet of all your noises.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  