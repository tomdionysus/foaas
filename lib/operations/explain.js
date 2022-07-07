module.exports = {
  name: 'Explain',
  url: '/explain/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/explain/:name/:from', function (req, res) {
      const message = `I can only explain it to you, ${req.params.name}. I can’t understand it for you. `
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
