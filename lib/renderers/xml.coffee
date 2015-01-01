xmlEscape = require 'xml-escape'

module.exports =
  name: 'XML'
  mime: 'application/xml'

  render: (res, message, subtitle) -> 
    res.set 'Content-Type', 'application/xml'
    res.send '<?xml version="1.0" encoding="UTF-8"?>
<foaas:response xmlns:foaas="http://foaas.com/fuckoff">
  <foaas:message>'+xmlEscape(message)+'</foaas:message>
  <foaas:subtitle>'+xmlEscape(subtitle)+'</foaas:subtitle>
</foaas:response>'