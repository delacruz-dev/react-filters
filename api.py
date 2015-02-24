from bottle import route, response, run, hook

@route('/')
def hello():
	return "Hello World!"

@hook('after_request')
def enable_cors():
    response.headers['Access-Control-Allow-Origin'] = '*'

@route('/real-estate/filters', method='GET')
def filters():
    return { 'buildingTypes': [ { 'id' : 1, 'value' : 'Homes' },
                                { 'id' : 2, 'value' : 'New Homes' },
                                { 'id' : 3, 'value' : 'Luxury Homes' },
                                { 'id' : 4, 'value' : 'Commercial premises' },
                                { 'id' : 5, 'value' : 'Garages' },
                                { 'id' : 6, 'value' : 'Land' },
                                { 'id' : 7, 'value' : 'Offices' },
                                { 'id' : 8, 'value' : 'Box rooms' }],
            'transactionTypes': [  { 'id' : 1, 'value' : 'Offer' },
                                   { 'id' : 2, 'value' : 'Rent' }],
            'prices' : [ { 'transactionType': 1,
                        'values':[ { 'id' : 150000, 'value' : 'From 150.000' },
                                  { 'id' : 300000, 'value' : 'From 300.000' },
                                  { 'id' : 450000, 'value' : 'From 450.000' },
                                  { 'id' : 600000, 'value' : 'From 600.000' },
                                  { 'id' : 700000, 'value' : 'From 700.000' },
                                  { 'id' : 800000, 'value' : 'From 800.000' },
                                  { 'id' : 900000, 'value' : 'From 900.000' }
                                  ]
                            },
                         { 'transactionType': 2,
                        'values': [ { 'id' : 150, 'value' : 'From 150' },
                                   { 'id' : 300, 'value' : 'From 300' },
                                   { 'id' : 450, 'value' : 'From 450' },
                                   { 'id' : 600, 'value' : 'From 600' },
                                   { 'id' : 700, 'value' : 'From 700' },
                                   { 'id' : 800, 'value' : 'From 800' },
                                   { 'id' : 900, 'value' : 'From 900' }
                                   ] } ]
        }

@route('/real-estate/filters/transaction-type', method='GET')
def buildingType():
	return { 'transactionTypes': [  { 'id' : 1, 'value' : 'Offer' },
									{ 'id' : 2, 'value' : 'Rent' },
									{ 'id' : 3, 'value' : 'Share' },
									{ 'id' : 4, 'value' : 'Vacational Rental' }]
			}


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

def prices():
	return { 'prices' : [ { 'transactionType': 1, 
							'values': [ { 'id' : 150, 'value' : 'From 150' },
										{ 'id' : 300, 'value' : 'From 300' },
										{ 'id' : 450, 'value' : 'From 450' },
										{ 'id' : 600, 'value' : 'From 600' },
										{ 'id' : 700, 'value' : 'From 700' },
										{ 'id' : 800, 'value' : 'From 800' },
										{ 'id' : 900, 'value' : 'From 900' }
									] 
							},
							{ 'transactionType': 2, 
							  'values': [ { 'id' : 150000, 'value' : 'From 150.000' },
										  { 'id' : 300000, 'value' : 'From 300.000' },
										  { 'id' : 450000, 'value' : 'From 450.000' },
										  { 'id' : 600000, 'value' : 'From 600.000' },
										  { 'id' : 700000, 'value' : 'From 700.000' },
										  { 'id' : 800000, 'value' : 'From 800.000' },
										  { 'id' : 900000, 'value' : 'From 900.000' }
										] } ] 
			}

run(host='localhost', port=8091, debug=True, reloader=True)