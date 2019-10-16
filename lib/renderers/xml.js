// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const xmlEscape = require('xml-escape');

module.exports = {
  name: 'XML',
  mime: 'application/xml',

  render(req, res) { 
    res.set('Content-Type', 'application/xml');
    return res.send(`<?xml version="1.0" encoding="UTF-8"?> \
<foaas:response xmlns:foaas="http://foaas.com/fuckoff"> \
<foaas:message>`+xmlEscape(req.message)+`</foaas:message> \
<foaas:subtitle>`+xmlEscape(req.subtitle)+`</foaas:subtitle> \
</foaas:response>`
    );
  }
};