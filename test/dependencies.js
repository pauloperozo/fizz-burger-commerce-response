const { faker } = require('@faker-js/faker')
const axios = require('axios')

const request  = axios.create({
    'baseURL': 'http://localhost:4000/api',
    'headers': { 'Content-Type': 'application/json' }
})

const requestData = {

    "productId" : null,
    
    "product": {
    "name": faker.commerce.productName(),
    "type": faker.commerce.product(),
    "price": Number(faker.commerce.price()),
    "image": "https://revertia.com/wp-content/uploads/2014/01/1339221557612-10026808-icono-de-carrito-de-compras.jpg",
    "isPromotion": false,
    "discount": 0,
    "ingredients": [...new Set(Array(7).fill().map(row => faker.commerce.productMaterial())) ]
    },

    "productNew" :  { 
    "name": faker.commerce.productName(),
    "price":  Number(faker.commerce.price()) 
    }

}

module.exports = { request, requestData }