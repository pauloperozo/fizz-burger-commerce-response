const { request,requestData } = require('./dependencies')

describe('Test CRUD Product Basic',() => {

    it('debería traer un listado de productos', async () => {

      const response = await request.get('/product', requestData.product )
      expect(response.status).toBe(200)
      expect(Array.isArray(response.data)).toBe(true)
      console.info('Listado De Productos [✔].')
    })

    it('debería crear un nuevo producto', async () => {

      const response = await request.post('/product', requestData.product )
      expect(response.status).toBe(200)
      expect(response.data).toHaveProperty('id')
      requestData.productId = response.data.id
      console.info('Crear Productos [✔].')
    })

    it('debería obtener un producto existente', async () => {

      const response = await request.get(`/product/${requestData.productId}`)
      expect(response.status).toBe(200)
      expect(response.data).toHaveProperty('name', requestData.product.name )
      expect(response.data).toHaveProperty('price', requestData.product.price )
      console.info('Consultar Producto [✔].')
    })

    it('debería actualizar un producto existente', async () => {

      const response = await request.put(`/product/${requestData.productId}`, requestData.productNew)
      expect(response.status).toBe(200)
      expect(response.data).toHaveProperty('id', requestData.productId)
      console.info('Actualizar Productos [✔].')
    })

    it('debería eliminar un producto existente', async () => {
      const response = await request.delete(`/product/${requestData.productId}`)
      expect(response.status).toBe(200)
      console.info('Eliminacion De Productos [✔].')
    })


})
