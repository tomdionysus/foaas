module.exports = {
    name: 'Row',
    url: '/row/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/row/:from', function (req, res) {
        const message = 'Row, row, row, row your boat, gently away from me.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }