import dbConnect from '../db'
import mongoose from 'mongoose'

describe('db', () => {
  beforeAll(async () => {
    await dbConnect()
  })

  afterAll(() => {
    mongoose.connection.close()
  })

  it('should models name  getir', () => {
    expect(mongoose.modelNames()).toStrictEqual(['getir'])
  })
})
