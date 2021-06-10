const request = require('supertest')

const app = require('../../src/server/index')

describe('Get Endpoints (not mocking)', () => {
    test('/fetchMeaningCloud', async () => {
        const res = await request(app)
            .post('/.netlify/functions/index/fetchMeaningCloud')
            .send({ txt: 'i can do it' })
        expect(res.status).toEqual(200)
        expect(res.body.score_tag).toEqual('P')
    })
})