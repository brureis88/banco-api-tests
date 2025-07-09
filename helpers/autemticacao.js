const request = require('supertest')

const obterToken = async (usuario, senha) => {
    const responstaLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
            'username': usuario,
            'senha': senha
        })

    return responstaLogin.body.token
}

module.exports = {
    obterToken
}