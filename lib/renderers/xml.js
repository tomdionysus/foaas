xmlEscape = require 'xml-escape'

module.exports =
  name: 'XML'
  mime: 'application/xml'

  render: (req, res) -> 
    res.set 'Content-Type', 'application/xml'
    res.send '<?xml version="1.0" encoding="UTF-8"?>
<foaas:response xmlns:foaas="http://foaas.com/fuckoff">
  <foaas:message>'+xmlEscape(req.message)+'</foaas:message>
  <foaas:subtitle>'+xmlEscape(req.subtitle)+'</foaas:subtitle>
</foaas:response>'