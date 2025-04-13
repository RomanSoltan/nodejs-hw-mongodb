import Joi from 'joi';
import { CONTACT_TYPE_LIST } from '../constants/contacts.js';

export const addContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'any.required': 'Name is required',
    'string.empty': 'Name cannot be empty.',
    'string.min': 'User name should be at least 3 characters long.',
    'string.max': 'User name should not exceed 30 characters.',
  }),
  phoneNumber: Joi.string().required().messages({
    'any.required': 'Phone number is required',
    'string.empty': 'Phone number cannot be empty.',
  }),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid(...CONTACT_TYPE_LIST),
});

export const updateContactSchema = Joi.object({
  name: Joi.string(),
  phoneNumber: Joi.string(),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid(...CONTACT_TYPE_LIST),
});
