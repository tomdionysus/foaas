module.exports = {
    name: 'Absolutely fucking not',
    url: '/absolutely/:company/:from',
    fields: [
      { name: 'Company', field: 'company' },
      { name: 'From', field: 'from' }
    ],
  
    register (app, output) {
      return app.get('/absolutely/:company/:from', function (req, res) {
        const message = `Absolutely fucking Not, ${req.params.company}, No Fucking Way!`
        const subtitle = `- ${req.params.from}`
        return output(req, res, message, subtitle)
      })
    }
  }
  