request = require 'request'

module.exports =
  name: "ShoutCloud"
  description: ""
  priority: 1

  applies: (req) ->
    req.query? and req.query.shoutcloud?

  process: (req, res, next) =>

    str = "#{req.message}**seperator**#{req.subtitle}"

    request.post {
      headers: 'content-type': 'application/json'
      url: 'HTTP://API.SHOUTCLOUD.IO/V1/SHOUT'
      body: '{"INPUT": "'+str+'"}'
    }, (error, response, body) =>
      return module.exports.onError(req, res) if error?
      try
        str = JSON.parse(body)['OUTPUT'].split('**SEPERATOR**')
        req.message = str[0]
        req.subtitle = str[1]
        next(req,res)
      catch
        return module.exports.onError(req, res)

  onError: (req,res) ->
    res.status 408
    res.send('408 Bad Gateway - Upstream soundcloud.io is down.')
    res.end()