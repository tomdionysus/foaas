// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS206: Consider reworking classes to avoid initClass
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let FOAAS;
const express = require('express');
const bodyParser  = require('body-parser');
const methodOverride = require('method-override');
const fs = require('fs');
const path = require('path');
const npmPackage = require(path.resolve(__dirname,'../package.json'));
const _ = require('underscore');
const request = require('request');

module.exports = (FOAAS = (function() {
  FOAAS = class FOAAS {
    static initClass() {
  
      this.prototype.VERSION = npmPackage.version;
    }

    constructor(options) {
      // Internal State.
      this.sendFucks = this.sendFucks.bind(this);
      this.send622 = this.send622.bind(this);
      this.loadRenderers = this.loadRenderers.bind(this);
      this.loadFilters = this.loadFilters.bind(this);
      this.loadOperations = this.loadOperations.bind(this);
      this.do = this.do.bind(this);
      this.start = this.start.bind(this);
      this.output = this.output.bind(this);
      this.process = this.process.bind(this);
      this.operations = {};
      this.operationsArray = [];
      this.formats = {};
      this.formatsArray = [];
      this.filters = {};
      this.fucks = '';

      // Main App
      this.app = express();

      // Plugin Paths
      const renderersPath = options.renderersPath || 'renderers';
      const filtersPath = options.filtersPath || 'filters';
      const operationsPath = options.operationsPath || 'operations';

      // A man is not dead while his name is still spoken.
      this.app.use(function(req, res, next) {
        res.header('X-Clacks-Overhead', 'GNU Terry Pratchett');
        return next();
      });
      
      // Standard Middleware
      this.app.use(bodyParser.json({extended: true, strict: false}));
      this.app.use(bodyParser.urlencoded({extended: true}));
      this.app.use(bodyParser.text({extended: true}));
      this.app.use(methodOverride());
    
      // Load Filters
      this.loadFilters(filtersPath);

      // Send very permissive CORS headers.
      this.app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        return next();
      });

      // Operations
      this.loadOperations(operationsPath);

      // All Public Resources.
      this.app.use(express.static('./public'));

      // GET / and /index.html sends index HTML page.
      this.app.get('/', this.sendIndex);
      this.app.get('index.html', this.sendIndex);

      // GET /fucks sends documentation
      this.app.get('/fucks', this.sendFucks);

      // OPTIONS on any route sends CORS above and ends
      this.app.options("*", (req, res) => res.end());

      // Final case, send 622 All The Fucks
      this.app.use(this.send622);
    
      // Renderers
      this.loadRenderers(renderersPath);
    }

    sendFucks(req, res) {
      return res.send(this.fucks);
    }

    send622(req, res) {
      res.status(622);
      return this.output(req, res, "622 - All The Fucks", 'Server invites you to consider the truly monumental amount of fucks it couldn\'t give about your request.');
    }

    sendIndex(req, res) {
      return res.sendfile("./public/index.html");
    }

    loadRenderers(path) {
      return (() => {
        const result = [];
        for (let file of Array.from(fs.readdirSync(path))) {
          const renderer = require(path+'/'+file);
          this.formatsArray.push(renderer.mime);
          result.push(this.formats[renderer.mime] = renderer.render);
        }
        return result;
      })();
    }

    loadFilters(path) {
      for (let file of Array.from(fs.readdirSync(path))) {
        const filter = require(path+'/'+file);
        if (filter.register != null) { filter.register(this.app); }
        this.filters[filter.name] = filter;
      }

      return this.filters = _(this.filters).chain().sortBy('priority').value();
    }

    loadOperations(path) {
      const router = express.Router();
      for (let file of Array.from(fs.readdirSync(path))) {
        const operation = require(path+'/'+file);
        operation.register(router, this.output, this.VERSION);
        this.operationsArray.push({
          name: operation.name,
          url: operation.url,
          fields: operation.fields
        });
        this.operations[operation.url] = operation;
      }

      // /operations endpoint
      router.get('/operations', (req, res) => {
        return res.send(this.operationsArray);
      });

      // Default Operation
      router.get('/:thing/:from', (req, res) => {
        const message = `Fuck ${req.params.thing}.`;
        const subtitle = `- ${req.params.from}`;
        return this.output(req, res, message, subtitle);
      });

      this.app.use(this.do);
      return this.app.use(router);
    }

    do(req, res, next) {
      if (process.env.DEBUG !== "") {
        console.log(this.ISODateString(new Date())+` [INFO ] ${req.path}`);
      }
      return next();
    }

    start(port) {
      this.app.listen(port);
      console.log(`FOAAS v${this.VERSION} Started on port ${port}`);

      console.log(this.ISODateString(new Date()) + " [INFO ] generating fucks");
      return request(`http://localhost:${port}/operations`, (error, response, body) => {
        if (error) {
          return console.log(this.ISODateString(new Date()) + " [ERROR] could not retrieve the fucks");
        } else { 
          const ops = JSON.parse(body);

          return Array.from(ops).map((op) =>                 
            request({url: `http://localhost:${port}${op.url}`, headers: { 'Accept': 'text/plain'}}, (error, response, body) => {
              return this.fucks += `<tr><td>${response.request.uri.path}</td><td> Will return content of the form '${body}'</td></tr>`;
            }));
        }
      });
    }

    output(req, res, message, subtitle) {
      req.message = message;
      req.subtitle = subtitle;

      const filters = [];
      for (let filter of Array.from(this.filters)) {
        if (filter.applies(req)) { filters.push(filter); }
      } 

      const final = this.outputFinal;
      var rout = (req,res) => {
        return (filters.pop() || this).process(req,res,rout);
      };

      return rout(req,res);
    }

    process(req,res) {
      console.log(new Date().toISOString()+" "+req.method+" "+req.originalUrl+" ["+res.statusCode.toString()+"] "+JSON.stringify(req.body))

      var mime
      try {
        mime = req.accepts(this.formatsArray)
      } catch(e) {
        mime = null
      }

      if (mime == null || !this.formats[mime]) {
        res.status(406)
        res.end()
        return
      }

      this.formats[mime](req, res)
    }

    ISODateString(d) {
      const pad = function(n) {
        if (n < 10) { return `0${n}`; } else { return n; }
      };

      return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + 'Z';
    }
  };
  FOAAS.initClass();
  return FOAAS;
})());
