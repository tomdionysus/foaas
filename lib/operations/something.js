module.exports = {
  name: 'Something',
  url: '/something/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/something/:from', function (req, res) {
      const message = "If I had a dollar for every time you said something smart, I’d be broke."
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
