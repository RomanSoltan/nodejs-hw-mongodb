import { Router } from 'express';

import {
  addContactController,
  getAllContactByIdController,
  getAllContactsController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getAllContactsController));

contactsRouter.get('/:contactId', ctrlWrapper(getAllContactByIdController));

contactsRouter.post('/', ctrlWrapper(addContactController));

contactsRouter.patch('/:contactId', ctrlWrapper(patchContactController));

export default contactsRouter;
