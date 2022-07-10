module.exports = {
    name: 'Ugly',
    url: '/ugly/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/ugly/:from', function (req, res) {
        const message = 'My dear, you are ugly, but tomorrow I shall be sober and you will still be ugly.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }