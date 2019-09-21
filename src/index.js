import start from './app.js'
/**
 * Start and handle error
 */
start().catch(e => {
  console.log(e)
})
