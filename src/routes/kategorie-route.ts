import { Router } from 'express';
const router = Router();

import kategorieController from '../controllers/kategorie-controller.js';
import { validujBody, validujParametry } from '../middlewares/validace-middleware.js';
import { nactiPodleIdKategorieSchema, vlozKategorieSchema } from '../schemas/kategorie-schema.js';

router.get('/', kategorieController.nactiVse);
router.get('/:id', validujParametry(nactiPodleIdKategorieSchema), kategorieController.nactiPodleId);

router.post('/', validujBody(vlozKategorieSchema),  kategorieController.vloz);

export default router;