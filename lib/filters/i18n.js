request = require 'request'
i18next = require 'i18next'
md5 = require 'md5'

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

    separator = '!!,.,!!'
    # Shortcut if already english.
    return next(req, res) if lang == 'en'

    key = md5(lang+req.message+req.subtitle)

    if module.exports.cache[key]?
      txtt = module.exports.cache[key].split(separator)
      #console.log txtt
      req.message = txtt[0]
      req.subtitle = txtt[1]
      return next(req, res)
    else
      txt = "#{req.message} #{separator} #{req.subtitle}"
      request.post {
        headers: 'content-type': 'application/json'
        url: "http://api.mymemory.translated.net/get?q=#{txt}&langpair=en|#{lang}"
      }, (error, response, body) =>
        return module.exports.onError(req, res) if error?
        try
          reslt = JSON.parse(body)['responseData']['translatedText'].split(separator)
          req.message=reslt[0]
          req.subtitle=reslt[1]
          #module.exports.addCache(key,"#{req.message}  #{req.subtitle}")
          module.exports.addCache(key,"#{req.message} #{separator} #{req.subtitle}")
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

