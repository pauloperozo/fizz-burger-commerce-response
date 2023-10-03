const HttpResponse = require('../../helpers/httpResponse')
const ProductController = require('../../../app/Controllers/productController')

module.exports.handler =  async ( event ) => {

	try {

		const { pathParameters : { id } } = event 
		
		const result = await ProductController.Read( id )
		return HttpResponse.Success( result )

	} 
	catch ( e ) {
		return HttpResponse.Failure( e.message )
	}

}