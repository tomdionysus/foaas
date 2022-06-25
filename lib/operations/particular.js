module.exports = {
  name: 'This Thing In Particular',
  url: '/particular/:thing/:from',
  fields: [
    { name: 'Thing', field: 'thing' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/particular/:thing/:from', function (req, res) {
      const message = `fork this ${req.params.thing} in particular.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
