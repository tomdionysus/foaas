module.exports = {
  name: 'Thinking',
  url: '/thinking/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/thinking/:name/:from', function (req, res) {
      const message = `${req.params.name}, what were you actually thinking? Wait. I apologize! I forgot, you don't have the innate ability to think.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
