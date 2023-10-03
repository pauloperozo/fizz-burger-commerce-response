const { v4: uuidv4 } = require('uuid');
class Product {

    /**
     * Crea una instancia de la clase `Product`.
     * @constructor
     * @param {number} productId - El ID del producto.
     * @param {string} name - El nombre del producto.
     * @param {string} type - El tipo de producto.
     * @param {number} price - El precio del producto.
     * @param {string} image - La imagen del producto.
     * @param {boolean} isPromotion - Indica si el producto está en promoción.
     * @param {number} discount - El descuento aplicado al producto.
     * @param {Array<string>} ingredients - Los ingredientes del producto.
     */

    constructor( productId,name,type,price,image,isPromotion,discount,ingredients ) {

        this.id = uuidv4();
        this.name = name;
        this.type = type;
        this.price = price;
        this.image = image;
        this.isPromotion = isPromotion;
        this.discount = discount;
        this.ingredients = ingredients;
        this.status = null;
        this.createdAt = Date.now();
        this.updatedAt = null;

    }
}
