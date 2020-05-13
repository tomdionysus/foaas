module.exports = {
  name: 'This Guy',
  url: '/thumbs/:name/:from',
  fields: [
    { name: 'From', field: 'from' },
    { name: 'Name', field: 'name' }
  ],

  register (app, output) {
    return app.get('/thumbs/:name/:from', function (req, res) {
      const message = `Who has two thumbs and doesn't give a fuck? ${req.params.name}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
