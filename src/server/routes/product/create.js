const HttpResponse = require('../../helpers/httpResponse')
const ProductController = require('../../../app/Controllers/productController')

module.exports.handler =  async ( event ) => {

	try {

		const { body } = event
		const  payload = JSON.parse( body )
	
		const result = await ProductController.Create(  payload )
		return HttpResponse.Success( result )

	} 
	catch ( e ) {
		return HttpResponse.Failure( e.message )
	}

}