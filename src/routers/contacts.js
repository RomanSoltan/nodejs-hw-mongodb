import { Router } from 'express';

import {
  addContactController,
  deleteContactController,
  getAllContactByIdController,
  getAllContactsController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  addContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';

const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getAllContactsController));

contactsRouter.get(
  '/:contactId',
  isValidId,
  ctrlWrapper(getAllContactByIdController),
);

contactsRouter.post(
  '/',
  validateBody(addContactSchema),
  ctrlWrapper(addContactController),
);

contactsRouter.patch(
  '/:contactId',
  validateBody(updateContactSchema),
  isValidId,
  ctrlWrapper(patchContactController),
);

contactsRouter.delete(
  '/:contactId',
  isValidId,
  ctrlWrapper(deleteContactController),
);

export default contactsRouter;
