module.exports = {
    name: 'Tree',
    url: '/tree/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/tree/:from', function (req, res) {
        const message = 'Somewhere out there, there’s a tree whose single purpose on earth is to replace the oxygen you waste. Go find it and apologize.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  