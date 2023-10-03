class HttpResponse {
    
    static Failure( message = 'Internal Error', statusCode = 400 )
    { 
        return { statusCode, body: JSON.stringify( { message } ) }
    }

    static Success( obj = {}, statusCode = 200 ) {

        return { statusCode, body: JSON.stringify( obj ) }
    }

}

module.exports = HttpResponse
