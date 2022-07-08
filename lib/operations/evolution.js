module.exports = {
    name: 'Evolution',
    url: '/evolution/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/evolution/:from', function (req, res) {
        const message = 'You spit in the face of evolution.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  