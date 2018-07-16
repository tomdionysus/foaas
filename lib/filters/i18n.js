// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const request = require('request');
const i18next = require('i18next');
const md5 = require('md5');

module.exports = {
  name: "i18n",
  description: "",
  priority: 2,

  CACHE_SIZE: 4096,

  cache: {},
  cachePop: [],

  register(app) {
    i18next.init();
    return app.use(i18next.handle);
  },

  applies(req) {
    return (req.query != null) && (req.query.i18n != null);
  },

  process: (req, res, next) => {
    let lang = req.query.i18n;
    if (lang === '') { lang = req.locale; }
    if (lang === '') { lang = 'en'; }

    const separator = '!!,.,!!';
    // Shortcut if already english.
    if (lang === 'en') { return next(req, res); }

    const key = md5(lang+req.message+req.subtitle);

    if (module.exports.cache[key] != null) {
      const txtt = module.exports.cache[key].split(separator);
      //console.log txtt
      req.message = txtt[0];
      req.subtitle = txtt[1];
      return next(req, res);
    } else {
      const txt = `${req.message} ${separator} ${req.subtitle}`;
      return request.post({
        headers: { 'content-type': 'application/json'
      },
        url: `http://api.mymemory.translated.net/get?q=${txt}&langpair=en|${lang}`
      }, (error, response, body) => {
        if (error != null) { return module.exports.onError(req, res); }
        try {
          const reslt = JSON.parse(body)['responseData']['translatedText'].split(separator);
          req.message=reslt[0];
          req.subtitle=reslt[1];
          //module.exports.addCache(key,"#{req.message}  #{req.subtitle}")
          module.exports.addCache(key,`${req.message} ${separator} ${req.subtitle}`);
          return next(req, res);
        } catch (error1) {
          return module.exports.onError(req, res);
        }
      });
    }
  },    

  onError(req,res) {
    res.status(408);
    res.send('408 Bad Gateway - Upstream api.mymemory.translated.net unavailable or returned bad data.');
    return res.end();
  },

  addCache(key,message) {
    module.exports.cache[key] = message;
    module.exports.cachePop.push(key);
    return (() => {
      const result = [];
      while (module.exports.cachePop.length > module.exports.CACHE_SIZE) {
        key = module.exports.cachePop.shift();
        result.push(delete module.exports.cache[key]);
      }
      return result;
    })();
  }
};

