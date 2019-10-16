module.exports =
  name: 'Text'
  mime: 'text/plain'

  render: (req, res) ->
    res.set 'Content-Type', 'text/plain'
    res.send "#{req.message} #{req.subtitle}"