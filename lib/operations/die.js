module.exports = {
    name: 'Die',
    url: '/die/:from',
    fields: [
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/die/:from', function (req, res) {
        const message = 'You better die on a weekday, because no one will break their weekend plans to attend your funeral.'
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  