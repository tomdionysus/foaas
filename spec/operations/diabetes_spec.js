// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const operation = require('../../lib/operations/diabetes')

describe('/diabetes', function () {
  it('should have the correct name', () => expect(operation.name).toEqual('Diabetes'))

  it('should have the correct url', () => expect(operation.url).toEqual('/diabetes/:from/:type'))

  it('should have the correct fields', () =>
    expect(operation.fields).toEqual([
      { name: 'From', field: 'from' },
      { name: 'Type', field: 'type' }
    ])
  )

  return describe('register', function () {
    it('should call app.get with correct url', function () {
      const app =
        { get: jasmine.createSpy() }

      operation.register(app, null)

      expect(app.get).toHaveBeenCalledWith('/diabetes/:from/:type', jasmine.any(Function))
    })

    return it('should call output with correct params', function () {
      let func = null
      const app =
        { get (url, fn) { return func = fn } }
      const output = jasmine.createSpy()
      operation.register(app, output)

      const req = {
        params: {
          from: 'TESTFROM',
          type: '3'
        }
      }

      const message = `I'd love to stop and chat to you but I'd rather have type ${req.params.type} diabetes.`
      const subtitle = `- ${req.params.from}`

      func(req, 'RES')
      return expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)
    })
  })
})
