module.exports = {
    name: 'ID',
    url: '/id/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/id/:from', function (req, res) {
        const message = 'This looks like an ID:10T error.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }