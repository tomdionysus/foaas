operation = require '../../lib/operations/keepcalm'

describe "/keepcalm", ->
	it "should have the correct name", ->
		expect(operation.name).toEqual('Keep Calm')

	it "should have the correct url", ->
		expect(operation.url).toEqual('/keepcalm/:reaction/:from')

	it "should have the correct fields", ->
		expect(operation.fields).toEqual([
			{ name: 'Reaction', field: 'reaction'}
			{ name: 'From', field: 'from'}
		])

	describe 'register', ->
		it 'should call app.get with correct url', ->
			app =
				get: jasmine.createSpy()

			operation.register(app,null)

			expect(app.get).toHaveBeenCalled()
			expect(app.get.argsForCall[0][0]).toEqual('/keepcalm/:reaction/:from')

		it 'should call output with correct params', ->
			func = null
			app =
				get: (url, fn) -> func = fn
			output = jasmine.createSpy()
			operation.register(app, output)

			req =
				params:
					reaction: "TESTREACTION"
					from: "TESTFROM"

			message = "Keep the fuck calm and #{req.params.reaction}!"
			subtitle = "- #{req.params.from}"

			func(req,'RES')
			expect(output).toHaveBeenCalledWith(req, 'RES', message, subtitle)