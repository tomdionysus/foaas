// This file was created by debadri16 as a feature branch

const operation = require('../../lib/operations/dumbledore')

describe('/dumbledore', function () {
  it('should have the correct name', () => expect(operation.name).toEqual('Dumbledore'))

  it('should have the correct url', () => expect(operation.url).toEqual('/dumbledore/:from'))

  it('should have the correct fields', () =>
    expect(operation.fields).toEqual([
      { name: 'From', field: 'from' }
    ])
  )

  return describe('register', function () {
    it('should call app.get with correct url', function () {
      const app =
        { get: jasmine.createSpy() }

      operation.register(app, null)

      expect(app.get).toHaveBeenCalledWith('/dumbledore/:from', jasmine.any(Function))
    })

    return it('should call output with correct params', function () {
      let func = null
      const app =
        { get (url, fn) { return func = fn } }
      const output = jasmine.createSpy()
      operation.register(app, output)

      const req = {
        params: {
          from: 'TESTFROM'
        }
      }

      const message = 'Happiness can be found, even in the darkest of times, if one only remembers to fuck off.'
      const subtitle = `- ${req.params.from}`

      func(req, 'RES')
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitles)
    })
  })
})
