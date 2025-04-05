import { Router } from 'express';

import {
  addContactController,
  getAllContactByIdController,
  getAllContactsController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getAllContactsController));

contactsRouter.get('/:contactId', ctrlWrapper(getAllContactByIdController));

contactsRouter.post('/', ctrlWrapper(addContactController));

export default contactsRouter;
