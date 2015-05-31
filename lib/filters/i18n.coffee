request = require 'request'
i18next = require 'i18next'
md5 = require 'MD5'

module.exports =
  name: "i18n"
  description: ""
  priority: 2

  CACHE_SIZE: 4096

  cache: {}
  cachePop: []

  register: (app) ->
    i18next.init()
    app.use(i18next.handle)

  applies: (req) ->
    req.query? and req.query.i18n?

  process: (req, res, next) =>
    lang = req.query.i18n
    lang = req.locale if lang == ''
    lang = 'en' if lang == ''

    # Shortcut if already english.
    return next(req, res) if lang == 'en'

    key = md5(lang+req.message)

    if module.exports.cache[key]?
      req.message = module.exports.cache[key]
      return next(req, res)
    else
      request.post {
        headers: 'content-type': 'application/json'
        url: "http://api.mymemory.translated.net/get?q=#{req.message}&langpair=en|#{lang}"
      }, (error, response, body) =>
        return module.exports.onError(req, res) if error?
        try
          req.message = JSON.parse(body)['responseData']['translatedText']
          module.exports.addCache(key,req.message)
          return next(req, res)
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

