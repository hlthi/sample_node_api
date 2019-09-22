class ResultModel {
  constructor () {
    this.code = null
    this.msg = null
    this.results = []
  }

  /**
   * Success result
   */
  success (results) {
    this.code = 0
    this.msg = 'Success'
    this.results = results
  }

  /**
   * Failed result
   */
  fail (code, msg) {
    this.code = code
    this.msg = msg
  }
}

export default ResultModel
