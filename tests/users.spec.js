const request = require("supertest");
const app = require("../main");
const { connect } = require('./database')

describe('Users API', () => {
    let conn;

    beforeAll(async () => {
        conn = await connect(); // connect to the test database
    })

    afterEach(async () => {
        await conn.cleanup() // clear the database after each test
    })

    afterAll(async () => {
        await conn.disconnect() // close the connection to the test database
    })

    it('should return 201', async() => {
        const response = await request(app).post('/api/v1/users/signup').send({
            name: 'Susannah',
            email: 'susannah@example.com',
            password: '12345678'
        })


        expect(response.statusCode).toBe(201)
        expect(response.body).toHaveProperty('status')
        expect(response.body).toHaveProperty('data')
        expect(response.body).toHaveProperty('success')
        expect(response.body.data).toHaveProperty('user')
        expect(response.body.data).toHaveProperty('token')
    })

    

    
})
