import createHttpError from 'http-errors';
import {
  addContact,
  getAllContacts,
  getContactById,
} from '../services/contacts.js';

export const getAllContactsController = async (req, res) => {
  const data = await getAllContacts();

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data,
  });
};

export const getAllContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  const data = await getContactById(contactId);

  if (!data) {
    throw createHttpError(404, 'Contact not found');
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data,
  });
};

export const addContactController = async (req, res) => {
  const data = await addContact(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data,
  });
};
