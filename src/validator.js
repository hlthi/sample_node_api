import Joi from '@hapi/joi'

const schema = Joi.object({
  startDate: Joi.date().iso().required(),

  endDate: Joi.date().iso().required(),

  minCount: Joi.number().required(),

  maxCount: Joi.number().required()
})

export default schema
