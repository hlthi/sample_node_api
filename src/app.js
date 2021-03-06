import express from 'express'
import bodyParser from 'body-parser'
import mainMw from './main-mw.js'
import errorMw from './error-mw.js'
import db from './db.js'

async function app () {
  // connect mongo
  await db()

  // create express
  const app = express()

  // For each request, parse request body into a JavaScript object where header Content-Type is application/json
  app.use(bodyParser.json())

  // for heroku homepage
  app.get('/', (req, res) => { res.send('Please read doc, <a href="https://github.com/hlthi/sample_node_api">GITHUB REPO</a>') })

  // main middleware
  // if there was a bigger project the router would be here
  app.post('/', mainMw)

  // express error handler
  app.use(errorMw)

  // start the server
  // can be use in integration test for creating instance
  return app.listen(process.env.PORT || 3061)
}

export default app
