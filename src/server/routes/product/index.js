
const HttpResponse = require('../../helpers/httpResponse')
const ProductController = require('../../../app/Controllers/productController')

module.exports.handler =  async ( event ) => {

	try {

		const { queryStringParameters : params } = event
		
		const result = await ProductController.Index(  params )
		return HttpResponse.Success( result )

	} 
	catch ( e ) {
		return HttpResponse.Failure( e.message )
	}
	
}
