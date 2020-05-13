module.exports = {
  name: 'Pulp',
  url: '/pulp/:language/:from',
  fields: [
    { name: 'Language', field: 'language' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/pulp/:language/:from', function (req, res) {
      const message = `${req.params.language}, motherfucker, do you speak it?`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
