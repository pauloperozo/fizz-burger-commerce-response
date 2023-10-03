const ProductService = require('../Services/productService')

class ProductController {

    static async Index( params ) {

        /* Gemeramos el query a partir del params */
        const { query, sort } = ProductService.generateQuery( params )

        /*Listado De Productos  */
        const products = await ProductService.FindAllProducts( query, sort )
        return products 

    }

    static async Create( doc )  {
        
        /*Verificar Estructura De la Data */
        const invalid  = await ProductService.ValidProductData( doc )
        if( invalid )throw new Error( invalid )

        /*Verificar Que No Exista El Produto */
        const products = await ProductService.FindAllProducts({ name : doc.name })
        if( products.length > 0 ) throw new Error('Duplicate Entry Name Product...')
        
        /*Crear Producto */
        const { id } = await ProductService.CreateProduct( doc  )
        return  { id }
        
    }

    static async Read( id ) {

        /*Consultar Producto por Id */
        const product = await ProductService.FindOneProduct( id )
        if( !product ) throw new Error('Operation error consult...')
        return product
    }

    static async Update ( id, doc ) {

        /*Actualizar Producto por Id */
        const product = await ProductService.UpdateOneProduct( id , doc )
        if( !product ) throw new Error('Update operation error...')
        return product
    
    }

    static async Delete( id ) {

        /*Borrando Producto por Id */
        const result = await ProductService.DeleteOneProduct( id )
        if( !result ) throw new Error('Delete operation error...')
        return result

    }
}

module.exports = ProductController