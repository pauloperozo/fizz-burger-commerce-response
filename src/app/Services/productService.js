const Database = require('../../databases/mongo/connection')
const Model = require('../../databases/mongo/models/product')
const Repositorie = require('../Repositories/mongoose')

class ProductService {

    constructor( db,model,repositorie ) {

        this.Db = db
        this.Model = model    
        this.Repositorie = new repositorie( this.Model )
    }

    async FindAllProducts( params,sort = {}) {
      
        await this.Db.getConnection()
        const result = await this.Repositorie.index( params ,sort )
        return result

    }

    async FindOneProduct( params ) {
        
        await this.Db.getConnection()
        const result = await this.Repositorie.read( params )
        return result

    }

    async CreateProduct( data  ) {
        
        await this.Db.getConnection()
        const result = await this.Repositorie.create( data )
        if( !result ) throw new Error('Error adding product.')
        return { id : result._id }

    }
    
    async ValidProductData( data ) {

        try {
            const product = new this.Model( data ) 
            await product.validate()
        } 
        catch ( e ) {
            throw new Error( e )
        }
    }

    async UpdateOneProduct( id,doc ) {
        
        await this.Db.getConnection()
        const result = await this.Repositorie.update( id,doc )
        if( !result ) throw new Error('Error when editing product')
        return { id : result._id }
    
    }
    
    async DeleteOneProduct( id ) { 

        await this.Db.getConnection()
        const result = await this.Repositorie.delete( id )      
        return result   
    }
    
    generateQuery( params ){

        const query = {}
        const sort  = {}

        const orderValid  = ['name','price','type','discount']
        const orderDirec  = { 'asc': 1, 'desc': -1 }
        const promotion   = { '1': true, '0':false }
        
        if(params)
        {
            for( const [key, value] of Object.entries( params )  )
            {

                switch ( key ) {

                    case 'name':
                        query.name = new RegExp('^' + value, 'i')
                    break;

                    case 'type':
                        query.type = value
                    break;

                    case 'priceFrom':
                        if( isNaN( value ) && Number(value) < 0 ) throw new Error('priceFrom value rejected')
                        !query.price ? query.price = {} : null 
                        query.price.$gt =  Number(value)
                    break;

                    case 'priceTo':
                        if( isNaN( value ) && Number(value) < 0 ) throw new Error('priceTo value rejected')
                        !query.price ? query.price = {} : null 
                        query.price.$lt =  Number(value)
                    break;

                    case 'isPromotion': 
                        if( promotion[ value ] == undefined ) throw new Error('isPromotion value rejected')
                        query.isPromotion = promotion[ value ]
                    break;

                    case 'orderBy':
                        null
                    break;
                    
                    case 'orderDirection':
                        null
                    break;
        
                    default: throw new Error('Key params no valid.')
                
                }

            }

            const { orderBy,orderDirection }  = params
            if( orderBy && !orderValid.includes( orderBy ) ) throw new Error(`orderBy value rejected ${orderValid.join('|')}`)    
            if( orderDirection && !orderDirec[ orderDirection ] ) throw new Error(`orderDirection value rejected ${ Object.keys(orderDirec).join('|') }`)
            if( orderBy ) sort[ orderBy ] = orderDirec[ orderDirection ] || 1
        }

        return { query, sort }
    }
    
}

module.exports = new ProductService( Database, Model ,Repositorie )
