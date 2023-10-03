const HttpResponse = require('../../helpers/httpResponse')
const ProductController = require('../../../app/Controllers/productController')

module.exports.handler =  async ( event ) => {

	try {

		const { pathParameters : { id } } = event 
		const { body } = event
		const  payload = JSON.parse( body )
	
		const result = await ProductController.Update( id, payload )
		return HttpResponse.Success( result )

	} 
	catch ( e ) {
		return HttpResponse.Failure( e.message )
	}

}