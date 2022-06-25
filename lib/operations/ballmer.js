module.exports = {
  name: 'Ballmer',
  url: '/ballmer/:name/:company/:from',
  fields: [
    { name: 'Name', field: 'name' },
    { name: 'Company', field: 'company' },
    { name: 'From', field: 'from' }
  ],

  register (app, output) {
    return app.get('/ballmer/:name/:company/:from', function (req, res) {
      const message = `forking ${req.params.name} is a forking pussy. I'm going to forking bury that guy, I have done it before, and I will do it again. I'm going to forking kill ${req.params.company}.`
      const subtitle = `- ${req.params.from}`
      return output(req, res, message, subtitle)
    })
  }
}
