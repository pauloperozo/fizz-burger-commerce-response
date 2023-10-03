const { request } = require('./dependencies')

describe('Test Response Api',() => {
  
    it('debería el api responder un 404', async () => {

        const response = await request.get('/welcome')
        expect(response.status).toBe(200)
        console.info('Api Responde [✔].')
    })

})
