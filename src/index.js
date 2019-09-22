import start from './app.js'
/**
 * Could be a logger library on a real system
 */
start().catch(e => {
  console.log(e)
})
