module.exports = {
  name: 'Shut Up',
  url: '/shutup/:name/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/shutup/:name/:from', function (req, res) {
      const message = `${req.params.name}, shut the fork up.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
