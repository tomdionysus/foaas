module.exports = {
  name: 'Cry',
  url: '/cry/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/cry/:name/:from', function (req, res) {
      const message = `${req.params.name}, your face makes onions cry.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
