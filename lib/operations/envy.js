module.exports = {
    name: 'Envy',
    url: '/envy/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/envy/:from', function (req, res) {
        const message = 'I envy everyone you have never met.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  