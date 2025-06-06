const request = require("supertest");
const app = require("../main");
const { connect } = require('./database')
const UserModel = require('../users/users.model')

describe('Jobs API', () => {
    let conn;
    let token;

    beforeAll(async () => {
        conn = await connect(); // connect to the test database

        // create a user
        await UserModel.create({ name: 'Sussan', email: 'sussan@example.com', password: 'password' });

        // login user
        const response = await request(app).post('/api/v1/users/login').send({
            email: 'sussan@example.com',
            password: 'password'
        })

        token = response.body.data.token
    })

    afterEach(async () => {
        await conn.cleanup() // clear the database after each test
    })

    afterAll(async () => {
        await conn.disconnect() // close the connection to the test database
    })

    it('should create jobs successfully', async() => {
        const response = await request(app)
        .post('/api/v1/jobs')
        .set('authorization', `Bearer ${token}`)
        .send({
            title: 'Frontend Developer',
            description: 'We are looking for a frontend developer to join our team',
            location: 'Lagos',
            salary: 'Negotiable',
            company: 'AltSchool Africa',
            mode: 'remote',
            experience: '1 year',
            industry: 'Technology',
            expiryDate: '2023-12-31',
            role: 'Frontend Developer'
        })


    
        expect(response.statusCode).toBe(201)
        expect(response.body).toHaveProperty('message')
        expect(response.body).toHaveProperty('data')
    })

    it('should fail to create jobs if title is not passed', async() => {
        const response = await request(app)
        .post('/api/v1/jobs')
        .set('authorization', `Bearer ${token}`)
        .send({
            description: 'We are looking for a frontend developer to join our team',
            location: 'Lagos',
            salary: 'Negotiable',
            company: 'AltSchool Africa',
            mode: 'remote',
            experience: '1 year',
            industry: 'Technology',
            expiryDate: '2023-12-31',
            role: 'Frontend Developer'
        })

        expect(response.statusCode).toBe(400)
        expect(response.body).toHaveProperty('status', 'error')
        expect(response.body).toHaveProperty('message', 'Invalid payload')
    })
})
