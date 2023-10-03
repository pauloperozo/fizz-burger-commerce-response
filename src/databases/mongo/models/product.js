const { model ,models , Schema } = require('mongoose')

const productSchema = new Schema({

    "name": { type: String, required: true, minlength: 1,unique: true },
    "type": { type: String, required: true, minlength: 1 },
    "price": { type: Number, required: true, min: 0},
    
    "image": { 
        type: String, 
        default: 'https://gulagu.es/wp-content/uploads/2020/12/hamburguesa-generica-01-600x600.jpg', 
        match: [/^https?:\/\/.*\.jpg$/, 'Ingrese una url valida, mimetye: jpg']
    },
    
    "isPromotion": { type: Boolean, default: false },

    "discount": {
        type: Number,
        validate: {
            validator: function (v) {
                return !this.isPromotion || v >= 0;
            },
            message: 'El descuento no debe ser un número negativo.'
        }
    },

    "ingredients": {
        type: [String], required: true,
        validate: {
            validator: function (v) {
                return v.length > 0 && new Set(v).size === v.length
            },
            message: 'Los ingredientes no deben estar vacíos ni contener duplicados.'
        }
    },
    "status": { type: String, default: 'active' }

},
{ 
    "timestamps": { 
        "createdAt": 'dateCreated', 
        "updatedAt": 'dateModified'
    }, 
    
    "versionKey": false
})


const productModel = models.Product ?  models.Product  :  model('Product', productSchema) 

module.exports = productModel


 