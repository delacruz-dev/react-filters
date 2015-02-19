from bottle import route, response, run, hook

@route('/')
def hello():
	return "Hello World!"

@hook('after_request')
def enable_cors():
    response.headers['Access-Control-Allow-Origin'] = '*'

@route('/real-estate/filters/building-type', method='GET')
def buildingType():
	return { 'buildingTypes': [ { 'id' : 1, 'value' : 'Homes' },
								{ 'id' : 2, 'value' : 'New Homes' },
								{ 'id' : 3, 'value' : 'Luxury Homes' },
								{ 'id' : 4, 'value' : 'Commercial premises' },
								{ 'id' : 5, 'value' : 'Garages' },
								{ 'id' : 6, 'value' : 'Land' },
								{ 'id' : 7, 'value' : 'Offices' },
								{ 'id' : 8, 'value' : 'Box rooms' }]
			}

run(host='localhost', port=8091, debug=True, reloader=True)