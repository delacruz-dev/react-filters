from bottle import route, response, request, run, hook
import json
import sys
import os

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

@route('/scmspain/api/ads', method='GET')
def get():
	result = { 'classifiedAds': []}
	
	filters = _getFilters()
	json_data = _getJson()

	for item in json_data['classifiedAds']:
		if filters['price'] >= item['price']:
			result['classifiedAds'].append(item)
	return result

def _getJson():
	#os.chdir('./api/data')
	file_data = open('./api/data/AppData.js').read()
	json_data = json.loads(file_data)
	return json_data

def _getFilters():
	filters = { 'price': sys.maxint }
	if 'price' in request.query :
		filters['price'] = int(request.query.price) 
	return filters

run(host='localhost', port=8091, debug=True, reloader=True)