module.exports = {
  name: 'Xmas',
  url: '/xmas/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/xmas/:name/:from', function (req, res) {
      const message = `Merry forking Christmas, ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
