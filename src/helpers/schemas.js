const Joi = require('joi');

const hangmanSchema = Joi.object({
  uuid: Joi.string().required(),
  nguesses: Joi.number().required(),
  wguesses: Joi.array().items(Joi.string()),
  mword: Joi.string().required(),
  gletters: Joi.array().items(Joi.string()),
});

module.exports = {
  hangmanSchema
}
