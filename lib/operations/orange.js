module.exports = {
  name: 'Warm and fuzzy',
  url: '/orange/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/orange/:name/:from', function (req, res) {
      const message = `Thanks, ${req.params.name}. You make me feel all warm and fuzzy, like a moldy, busted orange, baking on the sidewalk.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
