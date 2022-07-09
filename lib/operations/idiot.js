module.exports = {
    name: 'Idiot',
    url: '/idiot/:name/:from',
    fields: [
      { name: 'Name', field: 'name' },
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/idiot/:name/:from', function (req, res) {
        const message = `${req.params.name} here may look like an idiot and talk like an idiot, but don't let that fool you! ${req.params.name}, really is an idiot. (●'◡'●)`
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  