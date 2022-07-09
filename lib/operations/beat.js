module.exports = {
    name: 'Beat',
    url: '/beat/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/beat/:from', function (req, res) {
        const message = 'I\'ll beat thee, but I would infect my hands.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  