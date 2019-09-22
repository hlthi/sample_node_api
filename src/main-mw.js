import validatorScheme from './validator.js'
import Boom from '@hapi/boom'
import mongoose from 'mongoose'
import ResultModel from './ResultModel.js'

async function mainMw (req, res, next) {
  // validate request
  const { error, value } = validatorScheme.validate(req.body)

  // oops, validation error, return bad request with Boom
  if (error) return next(Boom.badRequest(error))

  // get model
  const model = mongoose.model('getir')

  model
    .aggregate([
      { $match: { createdAt: { $gt: value.startDate, $lt: value.endDate } } }, // first filter with date
      { $unwind: '$counts' }, // prepare summing
      {
        $group: {
          _id: '$_id',
          key: { $first: '$key' },
          createdAt: { $first: '$createdAt' },
          totalCount: { $sum: '$counts' } // sum here
        }
      },
      { $match: { totalCount: { $gt: value.minCount, $lt: value.maxCount } } }, // filter with max  and min
      { $project: { _id: 0 } } // i dont need id in result
    ])
    .then(data => {
      // prepare result
      const result = new ResultModel()
      result.success(data)
      res.send(result)
    })
    .catch(e => {
      // oops error
      next(Boom.internal('Internal error.'))
    })
}

export default mainMw
