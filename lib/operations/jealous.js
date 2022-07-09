module.exports = {
    name: 'Jealous',
    url: '/jealous/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/jealous/:from', function (req, res) {
        const message = 'I am jealous of all the people who haven\'t met you.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  