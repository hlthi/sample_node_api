import mongoose from 'mongoose'

const url =
  'mongodb://dbUser:dbPassword1@ds249623.mlab.com:49623/getir-case-study' ||
  process.env.mongo_url

async function connect () {
  // connect db
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  // create schema
  const schema = new mongoose.Schema(
    { key: String, createdAt: Date, counts: [Number] },
    { collection: 'records' }
  )

  // create model
  mongoose.model('getir', schema)
}

export default connect
