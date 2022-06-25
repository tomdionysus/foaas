module.exports = {
    name: 'Absolutely forking not',
    url: '/absolutely/:company/:from',
    fields: [
      { name: 'Company', field: 'company' },
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/absolutely/:company/:from', function (req, res) {
        const message = `Absolutely forking Not, ${req.params.company}, No forking Way!`
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  