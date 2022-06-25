module.exports = {
  name: 'Jingle Bells',
  url: '/jinglebells/:from',
  fields: [
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/jinglebells/:from', function (req, res) {
      const message = 'fork you, fork me, fork your family. fork your father, fork your mother, fork you and me.'
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
