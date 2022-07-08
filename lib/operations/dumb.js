module.exports = {
    name: 'Dumb',
    url: '/dumb/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/dumb/:from', function (req, res) {
        const message = 'Are you naturally this dumb or do you have to put in effort?'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  