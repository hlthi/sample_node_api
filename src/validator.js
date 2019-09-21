import Joi from '@hapi/joi'

const schema = Joi.object({
  startDate: Joi.date().iso(),

  endDate: Joi.date().iso(),

  minCount: Joi.number(),

  maxCount: Joi.number()
})

export default schema
