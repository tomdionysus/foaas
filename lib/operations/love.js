module.exports = {
    name: 'Love',
    url: '/love/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/love/:from', function (req, res) {
        const message = 'Anyone who ever said they loved you lied.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }