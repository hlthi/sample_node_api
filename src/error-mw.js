import ResultModel from './ResultModel.js'

function errorMw (err, req, res, next) {
  // prepare error result
  // may be some internal errror handle here with logging library
  const result = new ResultModel()
  result.fail(err.output.statusCode, err.output.payload.message)

  /**
   * I dont like this. But document says that...
   * HTTP have status code, why we break ?
   */
  return res.status(200).json(result)
}

export default errorMw
