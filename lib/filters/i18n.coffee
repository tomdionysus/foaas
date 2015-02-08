request = require 'request'
i18next = require 'i18next'
md5 = require 'md5'

module.exports =
  name: "i18n"
  description: ""

  CACHE_SIZE: 4096

  cache: {}
  cachePop: []

  register: (app) ->
    i18next.init()
    app.use(i18next.handle)

  applies: (req) ->
    req.query? and req.query.i18n?

  process: (req, res, message, subtitle, next) =>
    lang = req.query.i18n
    lang = req.locale if lang == ''
    lang = 'en' if lang == ''

    # Shortcut if already english.
    return next(req, res, message, subtitle) if lang == 'en'

    key = md5(lang+message)

    if module.exports.cache[key]?
      return next(req, res, module.exports.cache[key], subtitle)
    else
      request.post {
        headers: 'content-type': 'application/json'
        url: "http://api.mymemory.translated.net/get?q=#{message}&langpair=en|#{lang}"
      }, (error, response, body) =>
        return module.exports.onError(req, res) if error?
        try
          message = JSON.parse(body)['responseData']['translatedText']
          module.exports.addCache(key,message)
          return next(req, res, message, subtitle)
        catch
          return module.exports.onError(req, res)    

  onError: (req,res) ->
    res.status 408
    res.send('408 Bad Gateway - Upstream api.mymemory.translated.net unavailable or returned bad data.')
    res.end()

  addCache: (key,message) ->
    module.exports.cache[key] = message
    module.exports.cachePop.push key
    while module.exports.cachePop.length > module.exports.CACHE_SIZE
      key = module.exports.cachePop.shift()
      delete module.exports.cache[key]

