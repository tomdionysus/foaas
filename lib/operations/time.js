module.exports = {
    name: 'Time',
    url: '/time/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/time/:from', function (req, res) {
        const message = 'I have neither the time nor the crayons to explain this to you.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  