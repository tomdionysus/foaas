const operation = require('../../lib/operations/waste')

describe('/waste', function () {
  it('should have the correct name', () => expect(operation.name).toEqual('Waste'))

  it('should have the correct url', () => expect(operation.url).toEqual('/waste/:name/:from'))

  it('should have the correct fields', () =>
    expect(operation.fields).toEqual([
      { name: 'Name', field: 'name' },
      { from: 'From', field: 'from' }
    ])
  )

  return describe('register', function () {
    it('should call app.get with correct url', function () {
      const app =
                { get: jasmine.createSpy() }

      operation.register(app, null)

      expect(app.get).toHaveBeenCalledWith('/waste/:name/:from', jasmine.any(Function))
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
        'I don\'t waste my fucking time with your bullshit TESTNAME!',
        '- TESTFROM'
      )
    })
  })
})
