module.exports = {
    name: 'Kill',
    url: '/kill/:name/:from',
    fields: [
      { name: 'Name', field: 'name' },
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/kill/:name/:from', function (req, res) {
        const message = `If I wanted to kill myself, I’d climb up your ego ${req.params.name}, and jump to your IQ.`
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  

  