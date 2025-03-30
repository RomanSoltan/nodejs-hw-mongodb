import { ContactsCollection } from '../db/models/Contact.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};
