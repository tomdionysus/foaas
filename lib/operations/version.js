module.exports = {
  name: 'Version',
  url: '/version',
  fields: [],

  register (app, output, version) {
    return app.get('/version', function (req, res) {
      const message = `Version ${version}`
      const subtitle = 'PFOaaS'
      return output(req, res, message, subtitle)
    })
  }
}
