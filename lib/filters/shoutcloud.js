// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const request = require('request');

module.exports = {
  name: "ShoutCloud",
  description: "",
  priority: 1,

  applies(req) {
    return (req.query != null) && (req.query.shoutcloud != null);
  },

  process: (req, res, next) => {

    let str = `${req.message}**seperator**${req.subtitle}`;

    return request.post({
      headers: { 'content-type': 'application/json'
    },
      url: 'HTTP://API.SHOUTCLOUD.IO/V1/SHOUT',
      body: `{"INPUT": "${str}"}`
    }, (error, response, body) => {
      if (error != null) { return module.exports.onError(req, res); }
      try {
        str = JSON.parse(body)['OUTPUT'].split('**SEPERATOR**');
        req.message = str[0];
        req.subtitle = str[1];
        return next(req,res);
      } catch (error1) {
        return module.exports.onError(req, res);
      }
    });
  },

  onError(req,res) {
    res.status(408);
    res.send('408 Bad Gateway - Upstream soundcloud.io is down.');
    return res.end();
  }
};