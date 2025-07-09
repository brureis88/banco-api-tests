const request = require('supertest')
const { expect } = require('chai')
const postLogin = require('../fixtures/postLogin.json')

require('dotenv').config()

describe('Login', () => {
    describe('POST /Login', async () => {
        it('Deve retornar 200 com um token em String quando usar credenciais válidas', async () => {
            const bodyLogin = { ...postLogin }
            console.log(bodyLogin)

            const response = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)

            expect(response.status).to.equal(200)
            expect(response.body.token).to.be.a('string')
        })
    })

})