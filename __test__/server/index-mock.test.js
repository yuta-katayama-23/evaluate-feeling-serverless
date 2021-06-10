const request = require('supertest')

const { fetchMeaningCloud } = require('../../src/server/controller/controller')
const app = require('../../src/server/index')

const axios = require('axios')
jest.mock('axios')

describe('axiosをmock化＆supertestでrequestを飛ばしてAPIテスト', () => {

    test('Normal pattern test', async () => {
        const resp = { data: { score_tag: 'test' } }
        axios.get.mockResolvedValue(resp)

        const res = await request(app)
            .post('/.netlify/functions/index/fetchMeaningCloud')
            .send({ txt: 'i can do it' })
        expect(res.status).toEqual(200)
        expect(res.body.score_tag).toEqual('test')
    })

    test('Abnormal pattern test', async () => {
        const resp = new Error('error test');
        axios.get.mockRejectedValue(resp);

        const res = await request(app)
            .post('/.netlify/functions/index/fetchMeaningCloud')
            .send({ txt: 'i can do it' })
        expect(res.status).toEqual(500)
        expect(res.body.errorMsg).toEqual('error test')
    })

    test('Abnormal pattern that error.response exit', async () => {
        const resp = new CustomError({
            status: 401,
            data: 'error.response.data'
        }, 'error.message');
        axios.get.mockRejectedValue(resp);

        const res = await request(app)
            .post('/.netlify/functions/index/fetchMeaningCloud')
            .send({ txt: 'i can do it' })
        expect(res.status).toEqual(401)
        expect(res.body.error).toEqual('error.response.data')
        expect(res.body.errorMsg).toEqual('error.message')
    })
})

describe('axiosはmock化＆関数のテストとしてAPIテスト', () => {
    test('Normal pattern', async () => {
        const resp = { data: { score_tag: 'not use superttest' } }
        axios.get.mockResolvedValue(resp)

        const req = { body: { txt: 'i can do it' } }
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnThis()
        }

        await fetchMeaningCloud(req, res)
        expect(res.status.mock.calls[0][0]).toBe(200)
        expect(res.send.mock.calls[0][0].score_tag).toEqual('not use superttest')
    })

    test('Abnormal pattern', async () => {
        const resp = new Error('error test');
        axios.get.mockRejectedValue(resp);

        const req = { body: { txt: 'i can do it' } }
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnThis()
        }

        await fetchMeaningCloud(req, res)
        expect(res.status.mock.calls[0][0]).toBe(500)
        expect(res.send.mock.calls[0][0].errorMsg).toEqual('error test')
    })

    test('Abnormal pattern that error.response exit', async () => {
        const resp = new CustomError({
            status: 401,
            data: 'error.response.data'
        }, 'error.message');
        axios.get.mockRejectedValue(resp);

        const req = { body: { txt: 'i can do it' } }
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnThis()
        }

        await fetchMeaningCloud(req, res)
        expect(res.status.mock.calls[0][0]).toBe(401)
        expect(res.send.mock.calls[0][0].error).toEqual('error.response.data')
        expect(res.send.mock.calls[0][0].errorMsg).toEqual('error.message')
    })
})

class CustomError extends Error {
    constructor(response, ...params) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params)

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }

        this.response = response
    }
}