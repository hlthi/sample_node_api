class ResultModel {
  constructor () {
    this.code = null
    this.msg = null
    this.records = []
  }

  /**
   * Success result
   */
  success (records) {
    this.code = 0
    this.msg = 'Success'
    this.records = records
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
