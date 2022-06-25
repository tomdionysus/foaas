module.exports = {
  name: 'Bag',
  url: '/bag/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/bag/:from', function (req, res) {
      const message = 'Eat a bag of forking dicks.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
