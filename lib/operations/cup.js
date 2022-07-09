module.exports = {
  name: 'Cup',
  url: '/cup/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/cup/:from', function (req, res) {
      const message = 'Here’s a full cup and a lid. Now shut the full cup.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
