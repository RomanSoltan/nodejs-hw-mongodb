import { Router } from 'express';

import {
  getAllContactByIdController,
  getAllContactsController,
} from '../controllers/contacts.js';

const contactsRouter = Router();

contactsRouter.get('/', getAllContactsController);

contactsRouter.get('/:contactId', getAllContactByIdController);

export default contactsRouter;
