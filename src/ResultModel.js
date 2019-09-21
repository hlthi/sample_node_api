class ResultModel {
  constructor () {
    this.code = null
    this.msg = null
    this.results = []
  }

  success (results) {
    this.code = 0
    this.msg = 'Success'
    this.results = results
  }

  fail (code, msg) {
    this.code = code
    this.msg = msg
  }
}

export default ResultModel
