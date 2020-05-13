module.exports = {
  name: 'JSON',
  mime: 'application/json',

  render (req, res) {
    return res.jsonp({ message: req.message, subtitle: req.subtitle })
  }
}
