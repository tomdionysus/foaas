const operation = require('../../lib/operations/explain')

describe('/explain', function () {
  it('should have the correct name', () => expect(operation.name).toEqual('Explain'))

  it('should have the correct url', () => expect(operation.url).toEqual('/explain/:name/:from'))

  it('should have the correct fields', () =>
    expect(operation.fields).toEqual([
      { name: 'Name', field: 'name' },
      { name: 'From', field: 'from' }
    ])
  )

  return describe('register', function () {
    it('should call app.get with correct url', function () {
      const app =
        { get: jasmine.createSpy() }

      operation.register(app, null)

      expect(app.get).toHaveBeenCalledWith('/explain/:name/:from', jasmine.any(Function))
    })

    return it('should call output with correct params', function () {
      let func = null
      const app =
        { get (url, fn) { return func = fn } }
      const output = jasmine.createSpy()
      operation.register(app, output)

      const req = {
        params: {
          name: 'TESTNAME',
          from: 'TESTFROM'
        }
      }

      const message = `I can only explain it to you, ${req.params.name}. I can’t understand it for you.`
      const subtitle = `- ${req.params.from}`

      func(req, 'RES')
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)
    })
  })
})
