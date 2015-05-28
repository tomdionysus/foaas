# FOAAS

0.1.6

[![Build Status](https://travis-ci.org/tomdionysus/foaas.svg?branch=master)](https://travis-ci.org/tomdionysus/foaas)

FOAAS (Fuck Off As A Service) provides a modern, RESTful, scalable solution to the common problem of telling people to fuck off.

Please see http://foaas.com for API documentation and examples.

# Installation

	npm install

# Run

	npm start

# Test

	npm test

# Clients

API clients are available in a number of languages:

| Language | Name           | Info |
|:---------|:---------------|:-----|
| JS/Node  | `foaas-client` | https://www.npmjs.org/package/foaas-client |
| Ruby     | `foaas-client` | https://github.com/petedmarsh/foaas-client |
| PHP      | `foaas-php`    | https://github.com/klaude/foaas-php |
| Python   | `foaas-python` | https://github.com/dmpayton/foaas-python |
| R        | `rfoaas`       | https://github.com/eddelbuettel/rfoaas |
| CLI/bash | `foaas.sh`     | https://github.com/RaymiiOrg/foaas.sh |
| .NET     | `FOAASClient`  | https://github.com/igorkulman/FOAASClient |
| Java     | `JFOAAS`       | https://github.com/AnUnknownMiner/FOAAS-Java |

# Integrate FOAAS

| Platform/Software | Name                                                                         |
|:------------------|:-----------------------------------------------------------------------------|
| Hubot				| https://github.com/github/hubot-scripts/blob/master/src/scripts/foass.coffee |

# Contributing

## Adding new operations

To add a new FOAAS operation:

1. Fork into your account
2. Branch into a feature branch `feature/your_operation`
3. See the operation files in `/lib/operations`.
4. Add specs, using `/spec/operations` as examples. We won't be merging operations without working specs.
5. Push to your fork and submit a PR.

For the time being, in your PR, please include relevant documentation in `public/index.html`.

All contributions are very welcome.
