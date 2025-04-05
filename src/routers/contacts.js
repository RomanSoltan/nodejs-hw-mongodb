import { Router } from 'express';

import {
  getAllContactByIdController,
  getAllContactsController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getAllContactsController));

contactsRouter.get('/:contactId', ctrlWrapper(getAllContactByIdController));

export default contactsRouter;
