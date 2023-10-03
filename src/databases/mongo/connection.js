const { connect } = require('mongoose')

typeof ConnectionInstance === 'undefined'  ? ConnectionInstance = null : null

class Connection {

    constructor( uri, timeout, pool  ) {

        this.Uri = uri

        this.Message = {
            Open:'Creando Nueva Conexion...',
            Connect:'Conexion Establecida....',
            Reconnect:'Usando Conexion Existente...',
            Fail : 'Error De Conexion Base de datos...'
        }

        this.Options = {
            connectTimeoutMS: timeout,
            maxPoolSize: pool,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
   
    }

    async getConnection() {

        if ( ConnectionInstance ) {
            console.log( this.Message.Reconnect )
            return ConnectionInstance
        }
        else 
        {
            try {

                console.log( this.Message.Open )
                const client = await connect( this.Uri, this.Options )
                ConnectionInstance = client.connection 
                console.log( this.Message.Connect )
            } 
            catch ( e ) {
                console.error( e.message )
                throw new Error( this.Message.Fail )
            }
            
            return ConnectionInstance
        }

    }

}

module.exports = new Connection( process.env.DATABASE_URL, process.env.TIMEOUT,process.env.POOL )