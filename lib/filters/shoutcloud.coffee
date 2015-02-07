request = require 'request'

module.exports =
  name: "ShoutCloud"
  description: ""

  applies: (req) ->
    req.query? and req.query.shoutcloud?

  process: (req, res, message, subtitle, next) =>

    str = "#{message}**seperator**#{subtitle}"

    request.post {
      headers: 'content-type': 'application/json'
      url: 'HTTP://API.SHOUTCLOUD.IO/V1/SHOUT'
      body: '{"INPUT": "'+str+'"}'
    }, (error, response, body) =>
      return module.exports.onError(req, res) if error?
      try
        str = JSON.parse(body)['OUTPUT'].split('**SEPERATOR**')
        next(req,res,str[0],str[1])
      catch
        return module.exports.onError(req, res)

  onError: (req,res) ->
    res.status 408
    res.send('408 Bad Gateway - Upstream soundcloud.io is down.')
    res.end()