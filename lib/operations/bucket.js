module.exports = {
  name: 'Bucket',
  url: '/bucket/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/bucket/:from', function (req, res) {
      const message = 'Please choke on a bucket of merde.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
