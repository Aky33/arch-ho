import { Router } from 'express';
const router = Router();

import receptController from '../controllers/recept-controller.js';
import { validujBody, validujParametry, validujQuery } from '../middlewares/validace-middleware.js';
import { nactiPodleIdReceptSchema, nactiNahodneReceptSchema, vlozReceptSchema } from '../schemas/recept-schema.js';

router.get('/', receptController.nactiVse);
router.get('/nahodne', validujQuery(nactiNahodneReceptSchema), receptController.nactiNahodne);
router.get('/:id', validujParametry(nactiPodleIdReceptSchema), receptController.nactiPodleId);

router.post('/', validujBody(vlozReceptSchema), receptController.vloz);

export default router;