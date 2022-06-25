module.exports = {
  name: 'Equity',
  url: '/equity/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/equity/:name/:from', function (req, res) {
      const message = `Equity only? Long hours? Zero Pay? Well ${req.params.name}, just sign me right the fork up.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
