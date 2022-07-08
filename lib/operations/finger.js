module.exports = {
    name: 'Finger',
    url: '/finger/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/finger/:from', function (req, res) {
        const message = 'I am just going to let my fore-finger to the talking.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }