from bottle import route, run

@route('/')
def hello():
	return "Hello World!"

@route('/real-estate/filters/<building_type:int>', method='GET')
def get(building_type):
	if (building_type == 1 ):
		return { 'transaction_type' : [ { 'id' : 1, 'resource_key' : 'offer' },
										{ 'id' : 3, 'resource_key' : 'rent' },
										{ 'id' : 5, 'resource_key' : 'share' },
										{ 'id' : 8, 'resource_key' : 'vacational_rent' } ],
			 	 'price_from' : [ { 'value' : 50000 },
			 			 		  { 'value' : 100000 },
			 			 		  { 'value' : 150000 } ]
				}

run(host='localhost', port=8091, debug=True, reloader=True)