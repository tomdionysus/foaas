module.exports = {
    name: 'Exist',
    url: '/exist/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/exist/:from', function (req, res) {
        const message = 'Please find somewhere else to exist.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }