module.exports = {
  name: 'Shut Up',
  url: '/shutup/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/shutup/:name/:from', function (req, res) {
      const message = `Since you know it all ${req.params.name}, you should know when to shut up.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
