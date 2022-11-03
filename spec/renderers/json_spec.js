const renderer = require(__dirname + '/../../lib/renderers/json')

describe('Json/JsonP Renderer', function () {
  it('should have the correct name', () => expect(renderer.name).toEqual('JSON'))

  it('should have the correct mime type', () => expect(renderer.mime).toEqual('application/json'))

  return describe('render', () =>
    it('should call res.jsonp with correct params', function () {
      const req = {
        message: 'ONE',
        subtitle: 'TWO'
      }
      const res =
        { jsonp: jasmine.createSpy() }
      renderer.render(req, res)

      return expect(res.jsonp).toHaveBeenCalledWith({ message: 'ONE', subtitle: 'TWO' })
    })
  )
})
