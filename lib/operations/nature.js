module.exports = {
    name: 'Nature',
    url: '/nature/:name/:from',
    fields: [
      { name: 'Name', field: 'name' },
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/nature/:name/:from', function (req, res) {
        const message = `I would love to insult you ${req.params.name}, but I’m afraid I won’t do it as well as nature did.`
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  