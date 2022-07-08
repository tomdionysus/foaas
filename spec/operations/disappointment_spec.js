const operation = require('../../lib/operations/disappointment')

describe('/disappointment', function () {
  it('should have the correct name', () => expect(operation.name).toEqual('Disappointment'))

  it('should have the correct url', () => expect(operation.url).toEqual('/disappointment/:from'))

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

      expect(app.get).toHaveBeenCalledWith('/disappointment/:from', jasmine.any(Function))
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

      const message = 'Life is full of disappointments, just ask your parents.'
      const subtitle = `- ${req.params.from}`

      func(req, 'RES')
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)
    })
  })
})