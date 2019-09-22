import request from 'supertest'
import app from '../app.js'

describe('Integration', () => {
  beforeAll(async () => {
    await app()
  })

  it('succeeds with correct parameters', async (done) => {
    const res = await post('/', {
      startDate: '2017-01-26',
      endDate: '2018-02-02',
      minCount: 2700,
      maxCount: 3000
    })

    expect(res.body.code).toBe(0)
    expect(res.body.msg).toBe('Success')
    expect(res.body.results.length === 0).toBe(false)
    done()
  })

  it('fail with wrong start date', async (done) => {
    const res = await post('/', {
      startDate: '2017-01-262',
      endDate: '2018-02-02',
      minCount: 2700,
      maxCount: 3000
    })

    expect(res.body.code).toBe(400)
    expect(res.body.msg).toBe('"startDate" must be in ISO 8601 date format')
    expect(res.body.results.length === 0).toBe(true)
    done()
  })

  it('fail with wrong end date', async (done) => {
    const res = await post('/', {
      startDate: '2017-01-26',
      endDate: '2018-22-02',
      minCount: 2700,
      maxCount: 3000
    })

    expect(res.body.code).toBe(400)
    expect(res.body.msg).toBe('"endDate" must be in ISO 8601 date format')
    expect(res.body.results.length === 0).toBe(true)
    done()
  })

  it('fail with wrong minCount', async (done) => {
    const res = await post('/', {
      startDate: '2017-01-26',
      endDate: '2018-02-02',
      minCount: 'abc',
      maxCount: 3000
    })

    expect(res.body.code).toBe(400)
    expect(res.body.msg).toBe('"minCount" must be a number')
    expect(res.body.results.length === 0).toBe(true)
    done()
  })

  it('fail with wrong maxCount', async (done) => {
    const res = await post('/', {
      startDate: '2017-01-26',
      endDate: '2018-02-02',
      minCount: 2700,
      maxCount: '**'
    })

    expect(res.body.code).toBe(400)
    expect(res.body.msg).toBe('"maxCount" must be a number')
    expect(res.body.results.length === 0).toBe(true)
    done()
  })

  it('fail with no start date', async (done) => {
    const res = await post('/', {
      endDate: '2018-02-02',
      minCount: 2700,
      maxCount: 3000
    })

    expect(res.body.code).toBe(400)
    expect(res.body.msg).toBe('"startDate" is required')
    expect(res.body.results.length === 0).toBe(true)
    done()
  })

  it('fail with no end date', async (done) => {
    const res = await post('/', {
      startDate: '2017-01-26',
      minCount: 2700,
      maxCount: 3000
    })

    expect(res.body.code).toBe(400)
    expect(res.body.msg).toBe('"endDate" is required')
    expect(res.body.results.length === 0).toBe(true)
    done()
  })

  it('fail with no minCount', async (done) => {
    const res = await post('/', {
      startDate: '2017-01-26',
      endDate: '2018-02-02',
      maxCount: 3000
    })

    expect(res.body.code).toBe(400)
    expect(res.body.msg).toBe('"minCount" is required')
    expect(res.body.results.length === 0).toBe(true)
    done()
  })

  it('fail with no maxCount', async (done) => {
    const res = await post('/', {
      startDate: '2017-01-26',
      endDate: '2018-02-02',
      minCount: 2700
    })

    expect(res.body.code).toBe(400)
    expect(res.body.msg).toBe('"maxCount" is required')
    expect(res.body.results.length === 0).toBe(true)
    done()
  })
})

// a helper function to make a POST request.
async function post (path, body) {
  const httpRequest = request(`http://localhost:${process.env.PORT || 3061}`).post(`${path}`)
  httpRequest.send(body)
  httpRequest.set('Accept', 'application/json')
  httpRequest.set('Origin', `http://localhost:${process.env.PORT || 3061}`)
  return httpRequest
}
