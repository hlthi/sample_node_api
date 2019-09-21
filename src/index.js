import express from 'express'
import bodyParser from 'body-parser'
import mainMw from './main-mw.js'
import errorMw from './error-mw.js'
import db from './db.js'

async function start () {
  // connect mongo
  await db()

  // create express
  const app = express()

  // For each request, parse request body into a JavaScript object where header Content-Type is application/json
  app.use(bodyParser.json())

  // news router (secured)
  app.post('/', mainMw)

  // express error handler
  app.use(errorMw)

  app.listen(3061, () => console.log('API listening on port 3061!'))
}

/**
 * Start and handle error
 */
start().catch(e => {
  console.log(e)
})
