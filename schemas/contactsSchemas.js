const Joi = require("joi");

const addContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[0-9\-]+$/).required(),
});

const updateContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  phone: Joi.string().pattern(/^[0-9\-]+$/),
}).min(1); // Мінімум одне поле має бути передане

module.exports = {
  addContactSchema,
  updateContactSchema,
};
