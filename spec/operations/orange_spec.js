const operation = require('../../lib/operations/orange')

describe('/orange', function () {
  it('should have the correct name', () => expect(operation.name).toEqual('Warm and fuzzy'))

  it('should have the correct url', () => expect(operation.url).toEqual('/orange/:name/:from'))

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

      expect(app.get).toHaveBeenCalledWith('/orange/:name/:from', jasmine.any(Function))
    })

    return it('should call outoput with correct params', function () {
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

      func(req, 'RES')
      return expect(output).toHaveBeenCalledWith(
        req,
        'RES',
        'Thanks, TESTNAME. You make me feel all warm and fuzzy, like a moldy, busted orange, baking on the sidewalk.',
        '- TESTFROM'
      )
    })
  })
})
